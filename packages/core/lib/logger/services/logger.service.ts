import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as winston from 'winston';

import { ConfigService } from '../../config/service';
import { findProjectRoot, Obj } from '../../utils';
import { Num } from '../../utils/number';

import { FormatsMap, TransportsMap } from '../constants';
import { Formats, Transports } from '../enums';
import { IntentLoggerOptions, Logger, LoggerConfig } from '../interfaces';
import { TransportOptions } from '../types';
import { defaultLoggerOptions, LoggerStore } from '../utils';

/**
 * The LoggerService class provides functionality for creating and managing Winston-based loggers.
 * It handles different transport configurations, including console and file transports, and can
 * return specific loggers based on the configuration.
 */
@Injectable()
export class LoggerService {
  /**
   * Creates a new Winston logger based on the provided configuration options.
   * It merges the provided options with default settings and configures the transports accordingly.
   *
   * @param options - The configuration options for the logger.
   * @returns A Winston logger instance.
   */
  static makeLogger(options: LoggerConfig): Logger {
    // Merge the default logger options with the provided options.
    options = { ...defaultLoggerOptions(), ...options };

    // Find the project's root directory to resolve file paths for file-based transports.
    const projectRoot = findProjectRoot();

    // Retrieve the logger configuration from the ConfigService.
    const config = ConfigService.get('logger') as IntentLoggerOptions;

    // Initialize an array to hold the transport configurations.
    const transportsConfig = [];

    // Iterate over the transport options to configure each transport.
    for (const transportOptions of options.transports) {
      let transport = transportOptions.transport;

      // Skip the console transport if it's disabled in the configuration.
      if (config.disableConsole && transport === Transports.Console) continue;

      // If the transport format is an integer (index), wrap it in an array.
      const formats = Num.isInteger(transportOptions.format)
        ? [transportOptions.format]
        : transportOptions.format;

      // Map the transport enum to the actual transport class from TransportsMap.
      if (Num.isInteger(transportOptions.transport)) {
        transport = TransportsMap[transportOptions.transport as Transports];
      }

      // Cast the transport to the Winston transport type.
      transport = transport as winston.transport;

      // Prepare the options for the transport, including the custom format and labels.
      const options = {
        ...Obj.except(transportOptions.options, ['format']),
        format: this.buildFormatter(
          formats as Formats[],
          transportOptions.labels,
        ),
      } as TransportOptions;

      // For the file transport, add the filename option based on the project root.
      if (transportOptions.transport === Transports.File) {
        options['filename'] = join(
          projectRoot,
          'storage/logs',
          transportOptions.options?.['filename'],
        );
      }

      // Add the configured transport to the transportsConfig array.
      transportsConfig.push(
        new TransportsMap[transportOptions.transport as Transports](
          options as any,
        ),
      );
    }

    // Return a new Winston logger instance with the configured transports and log level.
    return winston.createLogger({
      transports: transportsConfig,
      level: options.level,
    }) as Logger;
  }

  /**
   * Creates and returns a logger instance with context modification capabilities.
   * The logger instance has methods to log with or without context.
   *
   * @param name - The name of the logger instance.
   * @returns A logger instance with context methods.
   */
  static logger(name?: string): Logger {
    // Retrieve the logger configuration from the ConfigService.
    const config = ConfigService.get('logger') as IntentLoggerOptions;

    // Default the logger name to the configuration's default if not provided.
    name = name ?? config.default;

    // Return the existing logger from the store if it already exists.
    if (LoggerStore.exists(name)) return LoggerStore.get(name);

    // Retrieve the logger configuration for the specified name.
    const options = config.loggers[name];

    // Create the base logger instance.
    const logger = LoggerService.makeLogger(options);

    // Define the `withContext` method to add custom context to the logger.
    logger.withContext = (context: any) => {
      return logger.child({ context });
    };

    // Define the `withoutContext` method to remove the context from the logger.
    logger.withoutContext = () => {
      return logger.child({ context: undefined });
    };

    // Store the created logger for future use.
    LoggerStore.create(name, logger);

    // Return the newly created logger.
    return logger;
  }

  /**
   * Builds a custom log formatter based on the provided formats and optional labels.
   * It combines multiple formats to create a final logger output format.
   *
   * @param formats - The formats to apply to the log output.
   * @param labels - Optional labels to add to the log entries.
   * @returns A combined log format.
   */
  private static buildFormatter(
    formats: Formats[],
    labels?: Record<string, any>,
  ) {
    // Initialize an array to hold the formatters.
    const formatters = [];

    // Iterate over the formats array and add each corresponding formatter from the FormatsMap.
    for (const formatEnum of formats) {
      const formatter = FormatsMap[formatEnum as Formats] as any;
      formatters.push(formatter());
    }

    // If labels are provided, add a label formatter to the list.
    labels && formatters.push(winston.format.label(labels));

    // Combine all the individual formatters into a single format and return it.
    return winston.format.combine(
      winston.format.errors({ stack: true }), // Ensure error stack traces are included.
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add a timestamp to the logs.
      ...formatters, // Add all the other formatters.
    );
  }
}

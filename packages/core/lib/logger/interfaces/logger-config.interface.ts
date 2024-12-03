import { transport } from 'winston';

import { Formats, LogLevel, Transports } from '../enums';
import { TransportOptions } from '../types';

/**
 * Interface representing the configuration options for setting up a logger.
 * This allows for customizing the logging level, transports, and other related options.
 *
 * @example
 * const loggerConfig: LoggerConfig = {
 *   level: LogLevel.DEBUG,
 *   transports: [
 *     {
 *       format: [Formats.Default, Formats.Timestamp],
 *       transport: Transports.Console,
 *       labels: { source: 'api' },
 *       options: { level: 'info' }
 *     },
 *   ],
 * };
 */
export interface LoggerConfig {
  /**
   * The logging level determines the minimum level of log messages that will be recorded.
   * It defaults to LogLevel.DEBUG if not provided.
   *
   * @type {LogLevel}
   * @example LogLevel.INFO, LogLevel.ERROR, etc.
   */
  level?: LogLevel;

  /**
   * An array of transport configurations for logging.
   * Each transport defines how and where logs are sent (e.g., console, file, HTTP, etc.).
   * The transports can have a specific format, transport method, associated labels, and options.
   *
   * @type {Array<{format: Formats | Formats[], transport: Transports | transport, labels?: Record<string, any>, options?: TransportOptions}>}
   * @example
   * [
   *   {
   *     format: Formats.Json,
   *     transport: Transports.Console,
   *     labels: { application: 'my-app' },
   *     options: { level: 'debug' }
   *   }
   * ]
   */
  transports?: {
    /**
     * The format(s) applied to the log output.
     * It can be a single format or an array of formats.
     * Common formats include colorize, timestamp, JSON, etc.
     *
     * @type {Formats | Formats[]}
     * @example Formats.Colorize, Formats.Timestamp
     */
    format?: Formats | Formats[];

    /**
     * Specifies the transport method used for logging.
     * This could be the console, file, HTTP transport, etc.
     *
     * @type {Transports | transport}
     * @example Transports.Console, Transports.File, etc.
     */
    transport?: Transports | transport;

    /**
     * Optional labels that can be added to the log output for categorization or identification.
     *
     * @type {Record<string, any>}
     * @example { environment: 'production', source: 'api' }
     */
    labels?: Record<string, any>;

    /**
     * Optional configuration options for the transport.
     * These are specific to the chosen transport and determine its behavior.
     *
     * @type {TransportOptions}
     * @example { level: 'debug', handleExceptions: true }
     */
    options?: TransportOptions;
  }[];
}

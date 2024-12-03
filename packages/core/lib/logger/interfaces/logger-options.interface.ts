import { LoggerConfig } from './logger-config.interface';

/**
 * Interface for configuring the IntentLogger options.
 * This interface allows you to specify global logger settings,
 * as well as configure individual loggers with specific configurations.
 */
export interface IntentLoggerOptions {
  /**
   * The default logger key that will be used if no specific logger is provided.
   * This can be the name of a logger configured in the `loggers` property.
   *
   * @type {string}
   * @example 'defaultLogger'
   */
  default: string;

  /**
   * A flag to enable or disable logging to the console.
   * If set to `true`, console logs will be disabled globally.
   *
   * @type {boolean}
   * @example false // Disables console logging
   */
  disableConsole: boolean;

  /**
   * A dictionary of loggers, where the keys are logger names and the values
   * are `LoggerConfig` objects that define the configuration for each logger.
   * This allows you to configure multiple loggers with different settings.
   *
   * @type {Record<string, LoggerConfig>}
   * @example
   * {
   *   'appLogger': {
   *     level: LogLevel.DEBUG,
   *     transports: [{ transport: Transports.Console, format: Formats.Json }],
   *   },
   *   'errorLogger': {
   *     level: LogLevel.ERROR,
   *     transports: [{ transport: Transports.File, format: Formats.Colorize }],
   *   }
   * }
   */
  loggers: {
    [key: string]: LoggerConfig;
  };
}

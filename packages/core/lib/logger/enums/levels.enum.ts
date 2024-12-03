/**
 * Enum representing the different log levels for controlling the verbosity of log output.
 * These levels determine the severity or importance of the log message.
 * Each level includes specific information about the log message, and messages of lower severity can be filtered out based on the configured log level.
 */
export enum LogLevel {
  /**
   * Logs error messages that represent critical issues, typically those that cause the application to fail.
   */
  ERROR = 'error',

  /**
   * Logs warning messages that indicate potential problems or unusual situations that do not cause failures.
   * These messages are important to acknowledge but do not require immediate action.
   */
  WARN = 'warn',

  /**
   * Logs general information about the application’s execution flow.
   * These logs provide useful insights into the application's state without indicating errors or issues.
   */
  INFO = 'info',

  /**
   * Logs HTTP request and response data, useful for debugging network-related behavior.
   * This level typically includes details such as HTTP status codes, request paths, and response times.
   */
  HTTP = 'http',

  /**
   * Logs verbose messages for detailed tracking of application behavior.
   * This level is used for development and debugging purposes, providing a more granular level of detail.
   */
  VERBOSE = 'verbose',

  /**
   * Logs debug information for tracking the application’s internal state.
   * This level is generally used during development for deep diagnostics.
   */
  DEBUG = 'debug',
}

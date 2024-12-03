/**
 * Enum representing the different types of log transports available in the logging system.
 * Each transport corresponds to a specific destination for logs (e.g., console, file, HTTP, etc.).
 * These are used to define where and how the log data should be output.
 */
export enum Transports {
  /**
   * The default transport, typically used for a predefined logging mechanism.
   * This can be mapped to a specific logging transport like console or file in the configuration.
   */
  Default,

  /**
   * The transport for logging to the console (stdout).
   * Logs will be output to the terminal or command line interface.
   */
  Console,

  /**
   * The transport for logging to a file.
   * Logs will be saved to a specified file for persistent storage.
   */
  File,

  /**
   * The transport for sending logs over HTTP.
   * Logs are sent to a remote server via HTTP requests, typically for centralized logging systems.
   */
  Http,

  /**
   * The transport for logging to a stream.
   * This can be used to pipe logs to custom streams such as network streams or other processes.
   */
  Stream,
}

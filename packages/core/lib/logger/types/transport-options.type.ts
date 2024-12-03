import { transports } from 'winston';

/**
 * Defines the type for transport options, which can be any of the available transport options
 * provided by Winston, including console, HTTP, file, or stream transports.
 *
 * This type ensures that the correct transport options are used based on the selected transport method.
 *
 * @example
 * const consoleTransportOptions: TransportOptions = {
 *   level: 'info',
 *   format: winston.format.simple(),
 *   handleExceptions: true,
 * };
 */
export type TransportOptions =
  | transports.ConsoleTransportOptions // Console transport options for logging to the console
  | transports.HttpTransportOptions // HTTP transport options for sending logs over HTTP
  | transports.FileTransportOptions // File transport options for saving logs to files
  | transports.StreamTransportOptions; // Stream transport options for logging to a stream

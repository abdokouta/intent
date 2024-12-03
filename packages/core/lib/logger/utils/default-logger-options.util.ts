import { Formats, LogLevel, Transports } from '../enums';

/**
 * Provides the default configuration options for a logger.
 * This includes setting the default log level, transport methods, and formats.
 *
 * @returns {object} Default logger options, including the log level, transports, and formats.
 */
export const defaultLoggerOptions = (): {
  level: LogLevel; // The default log level (set to DEBUG)
  [key: string]: any; // Additional configurable options (e.g., transports, format)
} => ({
  // Set the default log level to DEBUG, which logs all messages of level debug and higher.
  level: LogLevel.DEBUG,

  // Define the default transports and formats for the logger.
  // Here, we set the default transport type and default format to be used.
  transports: [{ transport: Transports.Default, format: Formats.Default }],
});

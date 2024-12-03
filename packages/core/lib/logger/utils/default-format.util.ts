import { Format } from 'logform';
import { format } from 'winston';

/**
 * Generates a default logging format for winston loggers.
 * Combines colorized output with a custom format that includes the log level, timestamp, and message.
 *
 * @returns {format.Format} A winston format combining colorized output and a custom log structure.
 */
export const defaultFormat = (): Format => {
  // Generate an ISO timestamp for consistent log entry timestamps.
  const date = new Date().toISOString();

  /**
   * Custom log format that structures each log entry.
   * Includes the log level (colorized), timestamp, and serialized message.
   */
  const logFormat = format.printf(info => {
    return `[${info.level}] ${date} : ${JSON.stringify(info.message)}`;
  });

  // Combine multiple formats: colorize the log level and apply the custom format.
  return format.combine(format.colorize(), logFormat);
};

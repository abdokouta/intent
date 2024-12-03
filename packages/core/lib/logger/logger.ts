import * as winston from 'winston';
import { LogLevel } from './enums';
import { LoggerService } from './services';

/**
 * Retrieves a logger instance from the LoggerService.
 * If a name is provided, it retrieves a named logger; otherwise, it retrieves the default logger.
 *
 * @param {string} [name] - The optional name for the logger instance.
 * @returns {winston.Logger} The logger instance.
 */
export const Log = (name?: string): winston.Logger => {
  // Retrieve a logger instance, optionally with a specific name.
  return LoggerService.logger(name);
};

/**
 * Logs a message or payload at the specified log level using the default logger.
 * If no log level is provided, it defaults to 'debug'.
 *
 * @param {any} payload - The message or data to log.
 * @param {string} [level='debug'] - The log level to use (e.g., 'info', 'warn', 'error').
 * @returns {Promise<void>} A promise that resolves after the log operation is completed.
 */
export const log = async (
  payload: any,
  level: string = LogLevel.DEBUG,
): Promise<void> => {
  // Retrieve the default logger.
  const logger = Log();

  // Use the specified log level, defaulting to 'debug', to log the payload.
  // The level property is dynamically accessed to allow flexibility.
  await logger[level](payload);
};

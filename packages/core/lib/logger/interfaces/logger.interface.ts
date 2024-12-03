import * as winston from 'winston';

/**
 * The custom logger interface that extends Winston's Logger interface
 * with additional methods for context management.
 *
 * @template TContext - The type for the context (default is `Record<string, any>`).
 */
export interface Logger<TContext = Record<string, any>> extends winston.Logger {
  /**
   * Adds context to the logger. Returns a new logger instance with the context.
   *
   * @param context - The context to be added to the logger.
   * @returns A new logger instance with the added context.
   */
  withContext(context: TContext): winston.Logger;

  /**
   * Removes context from the logger. Returns a new logger instance without any context.
   *
   * @returns A new logger instance without context.
   */
  withoutContext(): winston.Logger;
}

import { Logger } from '../interfaces';

/**
 * Utility class for managing a store of Logger instances.
 * Provides methods for creating, reading, updating, and deleting loggers.
 */
export class LoggerStore {
  /**
   * Internal store for holding Logger instances.
   * A `Map` is used to efficiently manage key-value pairs where
   * the key is a string identifier for each logger, and the value is the logger itself.
   * @private
   */
  private static store = new Map<string, Logger>();

  /**
   * Retrieves all loggers in the store as an array.
   *
   * @returns {Logger[]} An array of all `Logger` instances in the store.
   */
  public static getAll(): Logger[] {
    // Get all values (loggers) from the store as an array.
    return Array.from(LoggerStore.store.values());
  }

  /**
   * Retrieves a logger from the store.
   *
   * @param key - The unique key for the logger to retrieve.
   * @returns {Logger | undefined} The logger instance if found, otherwise undefined.
   */
  public static get(key: string): Logger | undefined {
    // Use the key to retrieve the logger from the store.
    return LoggerStore.store.get(key);
  }

  /**
   * Creates and adds a new logger to the store.
   * If a logger with the same key already exists, it will be overwritten.
   *
   * @param key - The unique key for the logger. Used as an identifier in the store.
   * @param logger - The `Logger` instance to store.
   * @returns {boolean} True if the logger was successfully created or updated.
   */
  public static create(key: string, logger: Logger): boolean {
    // Store the logger instance in the Map using the provided key.
    LoggerStore.store.set(key, logger);

    // Return true to indicate the operation was successful.
    return true;
  }

  /**
   * Updates an existing logger in the store.
   * If the key does not exist, this method will throw an error.
   *
   * @param key - The unique key for the logger to update.
   * @param logger - The new `Logger` instance to replace the existing one.
   * @returns {boolean} True if the logger was successfully updated.
   * @throws {Error} If the key does not exist in the store.
   */
  public static update(key: string, logger: Logger): boolean {
    // Check if the store contains the key.
    if (!LoggerStore.store.has(key)) {
      // Throw an error if the key does not exist in the store.
      throw new Error(`Logger with key "${key}" does not exist.`);
    }

    // Update the logger in the store with the new instance.
    LoggerStore.store.set(key, logger);

    // Return true to indicate the operation was successful.
    return true;
  }

  /**
   * Deletes a logger from the store.
   *
   * @param key - The unique key for the logger to delete.
   * @returns {boolean} True if the logger was deleted, false if the key was not found.
   */
  public static delete(key: string): boolean {
    // Attempt to delete the logger from the store.
    return LoggerStore.store.delete(key);
  }

  /**
   * Checks if a logger with the specified key exists in the store.
   *
   * @param key - The unique key for the logger to check.
   * @returns {boolean} True if the logger exists, otherwise false.
   */
  public static exists(key: string): boolean {
    // Check if the store contains the specified key.
    return LoggerStore.store.has(key);
  }

  /**
   * Retrieves all logger keys in the store.
   *
   * @returns {string[]} An array of all keys in the store.
   */
  public static getAllKeys(): string[] {
    // Get all keys from the store as an array.
    return Array.from(LoggerStore.store.keys());
  }

  /**
   * Clears the entire store, removing all loggers.
   * This is useful for resetting the store or cleaning up during tests.
   */
  public static clear(): void {
    // Clear all entries from the store.
    LoggerStore.store.clear();
  }
}

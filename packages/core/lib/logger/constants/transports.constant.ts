import { transports } from 'winston';
import { Transports } from '../enums';

/**
 * A mapping of transport types to their corresponding Winston transport modules.
 * This map allows dynamic resolution of transport configurations based on the transport type
 * defined in the `Transports` enum, making it easier to configure logging based on the transport selection.
 */
export const TransportsMap = {
  /**
   * Maps the `Default` transport type to Winston's `Console` transport.
   * This transport is typically used to output logs to the console or terminal.
   */
  [Transports.Default]: transports.Console,

  /**
   * Maps the `Console` transport type to Winston's `Console` transport.
   * This transport outputs logs directly to the console.
   */
  [Transports.Console]: transports.Console,

  /**
   * Maps the `File` transport type to Winston's `File` transport.
   * This transport writes log entries to a file, useful for persistent log storage.
   */
  [Transports.File]: transports.File,

  /**
   * Maps the `Http` transport type to Winston's `Http` transport.
   * This transport sends logs over HTTP to an external server, useful for centralized logging.
   */
  [Transports.Http]: transports.Http,

  /**
   * Maps the `Stream` transport type to Winston's `Stream` transport.
   * This transport streams log entries to a writable stream, allowing for real-time log monitoring.
   */
  [Transports.Stream]: transports.Stream,
};

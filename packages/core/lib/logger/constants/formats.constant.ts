import { format } from 'winston';
import { Formats } from '../enums';
import { defaultFormat } from '../utils';

/**
 * A mapping of format types to their corresponding Winston format modules.
 * This map allows dynamic selection of log formatting based on the specified format type
 * defined in the `Formats` enum. It simplifies the configuration of log outputs.
 */
export const FormatsMap = {
  /**
   * Maps the `Default` format type to the custom `defaultFormat` utility.
   * This format includes basic colorized output with a timestamp.
   */
  [Formats.Default]: defaultFormat,

  /**
   * Maps the `Simple` format type to Winston's built-in `simple` format.
   * The simple format outputs logs in a concise text format, typically for quick debugging.
   */
  [Formats.Simple]: format.simple,

  /**
   * Maps the `Align` format type to Winston's built-in `align` format.
   * The align format ensures that the log entries are aligned for better readability in the output.
   */
  [Formats.Align]: format.align,

  /**
   * Maps the `Cli` format type to Winston's built-in `cli` format.
   * The cli format is a simplified format useful for command-line applications.
   */
  [Formats.Cli]: format.cli,

  /**
   * Maps the `Colorize` format type to Winston's built-in `colorize` format.
   * The colorize format adds color to the log output, making logs easier to read in the terminal.
   */
  [Formats.Colorize]: format.colorize,

  /**
   * Maps the `Combine` format type to Winston's built-in `combine` format.
   * The combine format allows for chaining multiple formatting operations together.
   */
  [Formats.Combine]: format.combine,

  /**
   * Maps the `Errors` format type to Winston's built-in `errors` format.
   * The errors format is used for properly formatting error objects in the log output.
   */
  [Formats.Errors]: format.errors,

  /**
   * Maps the `Json` format type to Winston's built-in `json` format.
   * The json format outputs logs in JSON format, useful for structured log data and integration with logging tools.
   */
  [Formats.Json]: format.json,

  /**
   * Maps the `Label` format type to Winston's built-in `label` format.
   * The label format allows attaching a custom label to the log entries, providing context for the log source.
   */
  [Formats.Label]: format.label,

  /**
   * Maps the `Logstash` format type to Winston's built-in `logstash` format.
   * The logstash format outputs logs in a format suitable for log aggregators like Logstash.
   */
  [Formats.Logstash]: format.logstash,

  /**
   * Maps the `Metadata` format type to Winston's built-in `metadata` format.
   * The metadata format includes additional metadata in the log entry, which can help with further context.
   */
  [Formats.Metadata]: format.metadata,

  /**
   * Maps the `Ms` format type to Winston's built-in `ms` format.
   * The ms format includes the elapsed time in milliseconds, useful for performance logging.
   */
  [Formats.Ms]: format.ms,

  /**
   * Maps the `PadLevels` format type to Winston's built-in `padLevels` format.
   * The padLevels format ensures that log levels are properly aligned with padding, improving readability.
   */
  [Formats.PadLevels]: format.padLevels,

  /**
   * Maps the `PrettyPrint` format type to Winston's built-in `prettyPrint` format.
   * The prettyPrint format outputs logs in a more readable, human-friendly format, often used in development.
   */
  [Formats.PrettyPrint]: format.prettyPrint,

  /**
   * Maps the `Printf` format type to Winston's built-in `printf` format.
   * The printf format provides a custom printf-style log output with customizable string formatting.
   */
  [Formats.Printf]: format.printf,

  /**
   * Maps the `Splat` format type to Winston's built-in `splat` format.
   * The splat format is used for log entries that support string interpolation, particularly in structured logging.
   */
  [Formats.Splat]: format.splat,

  /**
   * Maps the `Timestamp` format type to Winston's built-in `timestamp` format.
   * The timestamp format adds the current timestamp to each log entry, providing time context for each log.
   */
  [Formats.Timestamp]: format.timestamp,

  /**
   * Maps the `Uncolorize` format type to Winston's built-in `uncolorize` format.
   * The uncolorize format removes any colorization from the log output, typically used for non-terminal environments.
   */
  [Formats.Uncolorize]: format.uncolorize,
};

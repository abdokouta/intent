/**
 * Enum representing the different log formats available for customizing log output.
 * These formats control how the log messages are presented, such as adding timestamps,
 * colorizing, formatting as JSON, and more.
 */
export enum Formats {
  /**
   * The default log format. This is typically used for basic logging without any special formatting.
   */
  Default,

  /**
   * A simple log format that outputs the log message in a basic form, typically one line per log.
   */
  Simple,

  /**
   * A format that aligns log messages for better readability, usually for multi-line logs.
   */
  Align,

  /**
   * The CLI log format designed for output in the command-line interface.
   * It often uses colors and aligns the output to enhance readability in the terminal.
   */
  Cli,

  /**
   * Adds colorization to the log output, helping to visually distinguish different log levels.
   */
  Colorize,

  /**
   * Combines multiple log formats into a single output. Useful for including various pieces of information (e.g., timestamp, log level, message).
   */
  Combine,

  /**
   * Adds error-specific formatting to logs, often including stack traces or detailed error information.
   */
  Errors,

  /**
   * Outputs logs in JSON format, making it easier to parse and analyze logs programmatically.
   */
  Json,

  /**
   * Adds a label to the log output. This is useful for adding context or categorizing log entries.
   */
  Label,

  /**
   * A log format commonly used by the Logstash log aggregator. It provides a structured format suitable for machine parsing.
   */
  Logstash,

  /**
   * Adds metadata to the logs, providing additional information beyond the message and standard log fields.
   */
  Metadata,

  /**
   * Adds a millisecond timestamp to log entries, useful for precise timing of events.
   */
  Ms,

  /**
   * Pads log levels to ensure consistent column width in multi-line logs, improving readability.
   */
  PadLevels,

  /**
   * A pretty-printed log format that aims to enhance readability with better formatting for human readers.
   */
  PrettyPrint,

  /**
   * Formats logs using a printf-style template. This format allows you to define the exact structure of the log output.
   */
  Printf,

  /**
   * Adds support for splat-style formatters, where arguments are passed and logged in a specific way.
   */
  Splat,

  /**
   * Adds a timestamp to the log entries, useful for tracking when events occurred.
   */
  Timestamp,

  /**
   * Removes colorization from the log output, useful in environments where color output is not supported.
   */
  Uncolorize,
}

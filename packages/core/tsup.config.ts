import path from 'path';
import { defineConfig } from 'tsup';

/**
 * Configuration for building the project with tsup.
 *
 * This configuration sets up `tsup` to handle TypeScript compilation and bundling.
 * It specifies entry points, output formats, and other build options.
 *
 * @see {@link https://tsup.egoist.dev/ tsup documentation}
 */
export default defineConfig({
  /**
   * Entry points for the build process.
   *
   * - `src/index.ts`: Main entry point for TypeScript source files.
   * - Additional Gatsby-specific entry points are defined under `src/@gatsby`.
   *   These are needed for Gatsby's lifecycle and configuration.
   */
  entry: ['src/**/*.ts'],

  /**
   * Specify external dependencies that should not be bundled.
   */
  external: [
    'tslib',
    'moment',
    'figlet',
    'lodash',
    'ua-parser-js',
    '@nestjs/common',
    'reflect-metadata',
  ],

  /**
   * Output formats for the build.
   *
   * - `cjs`: CommonJS module format for Node.js compatibility.
   * - `esm`: ES Module format for modern JavaScript environments.
   */
  format: ['cjs', 'esm'],

  /**
   * Path to the TypeScript configuration file.
   *
   * Resolves the path to `tsconfig.json` to ensure proper TypeScript settings are used.
   */
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),

  /**
   * Generates TypeScript declaration files (.d.ts).
   *
   * Set to `true` to automatically generate `.d.ts` files for type definitions.
   * Additional options can be specified, such as:
   * - `banner`: A string to prepend to the generated .d.ts files.
   * - `resolve`: A boolean to indicate whether to resolve module paths.
   */
  dts: {
    banner: `/*
 *
 *  🚀 This file is part of the Pixicommerce.
 *
 *  ©️ 2024. Pixicommerce Technologies <contact@pixicommerce.com>
 *  🖋️ Author: Abdelrhman Kouta
 *      - 📧 Email: pixiedia@gmail.com
 *      - 🌐 Website: https://pixicommerce.com
 *  📖 Documentation: https://docs.pixicommerce.com
 *
 *  📄 For the full copyright and license information, please view
 *  the LICENSE file that was distributed with this source code.
 */
`,
    resolve: true,
  },

  /**
   * Cleans the output directory before each build.
   *
   * Set to `true` to remove old build artifacts and ensure a fresh build.
   * This helps to avoid conflicts with previous builds.
   */
  clean: true,

  /**
   * Specifies the output directory for the compiled files.
   *
   * Default is `dist`, but can be changed to any other directory as needed.
   */
  outDir: 'dist',

  /**
   * Target browsers for compilation.
   *
   * Specify which browsers to target, enhancing compatibility for users.
   */
  target: 'es2021',

  /**
   * Generates sourcemaps for easier debugging of the generated output.
   *
   * Set to `true` to enable sourcemap generation, which maps the compiled code back to the original TypeScript source.
   */
  sourcemap: true,

  /**
   * Minifies the output files for production.
   *
   * Set to `true` to reduce the file size by removing whitespace and other unnecessary characters.
   * This is recommended for production builds to improve load times.
   */
  minify: false,

  /**
   * Enable splitting the output into separate chunks.
   *
   * Set to `true` to create separate bundles for better caching and performance.
   */
  splitting: false,

  /**
   * Additional configuration options.
   *
   * Set `shims` to include polyfills for browser compatibility.
   */
  shims: true,

  /**
   * Watch for changes in files and automatically rebuild.
   *
   * Set to `true` to enable watch mode, which is useful during development to see changes in real-time.
   *
   * Example usage:
   * - Use the following condition to enable watch mode only during development:
   *   watch: process.env.NODE_ENV !== "production",
   *
   * Setting `watch` to `false` will disable watch mode by default.
   */
  watch: false,
});

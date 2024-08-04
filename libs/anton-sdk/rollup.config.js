const { withNx } = require('@nx/rollup/with-nx');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['cjs', 'esm'],
    assets: [{ input: '.', output: '.', glob: '*.md' }],
  },
  {
    plugins: [
      resolve({
        preferBuiltins: true,
        extensions: ['.js', '.ts', '.json'],
        modulesOnly: true,
        resolveOnly: [/@anton-suite\/.*/]
      }),
      commonjs()
    ],
    external: ['axios', '@anton-suite/utils-general', '@anton-suite/api-interface', '@anton-suite/utils-logger'],
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  }
);

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'
import { babel } from '@rollup/plugin-babel'

import packageJson from './package.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'build' }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({ babelHelpers: 'bundled' }),
    ],
  },
  {
    input: './build/esm/types/index.d.ts',
    output: [{ file: './build/index.d.ts', format: 'esm' }],
    plugins: [
      dts(),
      del({
        targets: ['./build/esm/types', './build/cjs/types'],
        hook: 'buildEnd',
      }),
    ],
  },
]

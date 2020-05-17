import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

let minify = process.env.minify || false;

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: minify ? "dist/starter-cjs.min.js" : "dist/starter-cjs.js",
        format: "cjs",
      },
      {
        file: minify ? "dist/starter-iife.min.js" : "dist/starter-iife.js",
        format: "iife",
        name: "rejoinder",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
      }),
      minify ? terser() : {},
    ],
  },
];

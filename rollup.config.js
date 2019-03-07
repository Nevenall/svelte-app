import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {
   terser
} from 'rollup-plugin-terser';
import browsersync from 'rollup-plugin-browsersync'
import {
   sass
} from 'svelte-preprocess-sass';
import scss from 'rollup-plugin-scss'

const production = !process.env.ROLLUP_WATCH;

export default {
   input: 'src/main.js',
   output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/bundle.js'
   },
   plugins: [
      svelte({
         // opt in to v3 behaviour today
         skipIntroByDefault: true,
         nestedTransitions: true,
         // note - not going to use custom elements yet because it doesn't work with transitions
         // customElement: true,

         // enable run-time checks when not in production
         dev: !production,
         // we'll extract any component CSS out into
         // a separate file — better for performance
         preprocess: {
            style: sass()
         },
         css: css => {
            css.write('public/bundle.css');
         }
      }),

      scss(),
      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration —
      // consult the documentation for details:
      // https://github.com/rollup/rollup-plugin-commonjs
      resolve(),
      commonjs(),
      browsersync({
         server: 'public',
         files: ['public/**'],
         open: false
      }),
      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser()
   ]
};
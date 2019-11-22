const sass = require('sass');
const { dirname } = require('path');

module.exports = {
   preprocess: {
      style: async ({ content, attributes, filename }) => {
         // only process <style lang="sass">
         if (attributes.type !== 'text/scss') return;

         console.log('[svelte.config] rendering sass')
         const { css, stats } = await new Promise((resolve, reject) => sass.render({
            file: filename,
            data: content,
            includePaths: [
               'src/styles',
               'node_modules',
               dirname(filename),
            ],
         }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
         }));

         console.log('[svelte.config] done sass')
         
         return {
            code: css.toString(),
            dependencies: stats.includedFiles
         };
      }
   }
}

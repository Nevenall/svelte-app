const sass = require('sass');
const svelte = require('svelte/compiler');
const { dirname } = require('path');

module.exports = {
   preprocess: {
      style: async ({ content, attributes, filename }) => {
         // only process <style lang="sass">
         if (attributes.type !== 'text/scss') return;

         const { css, stats } = await new Promise((resolve, reject) => sass.render({
            file: filename,
            data: content,
            includePaths: [
               dirname(filename),
            ],
         }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
         }));

         return {
            code: css.toString(),
            dependencies: stats.includedFiles
         };
      }
   }
}

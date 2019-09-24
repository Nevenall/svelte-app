const sass = require('sass');

module.exports = {
   preprocess: {
      style: async ({ content, attributes, filename }) => {
         // only process <style lang="sass">
         if (attributes.lang !== 'sass') return;

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







// const sass = require('sass');

// module.exports = {
//     preprocess: {
//         style: async ({ content, attributes }) => {
//             if (attributes.type !== 'text/scss') return;

//             return new Promise((resolve, reject) => {
//                 sass.render(
//                     {
//                         data: content,
//                         sourceMap: true,
//                         outFile: 'x', // this is necessary, but is ignored
//                     },
//                     (err, result) => {
//                         if (err) return reject(err);

//                         resolve({
//                             code: result.css.toString(),
//                             map: result.map.toString(),
//                         });
//                     },
//                 );
//             });
//         },
//     },
// };
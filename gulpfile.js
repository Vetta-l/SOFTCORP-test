//modules
const gulp = require('gulp');



//tasks
const serve = require('./tasks/server')
const pug2html = require('./tasks/pug2html')
const html = require('./tasks/html')
const sass = require('./tasks/scss')
const script = require('./tasks/script')
const imgcompress = require('./tasks/imgcompress')
const imgcopy = require('./tasks/imgcopy')
const webpcompress = require('./tasks/webp')
const svgcompress = require('./tasks/svgcompress')
const csscopy = require('./tasks/csscopy')
const jscopy = require('./tasks/jscopy')
const fonts = require('./tasks/fonts')
const otf2ttf = require('./tasks/otf2ttf')
const fontStyle = require('./tasks/fontStyle')
const fontcopy = require('./tasks/copyFont')
const renamePath = require('./tasks/renamePath')
const clean = require('./tasks/clean')




const dev = gulp.parallel(pug2html, sass, script, webpcompress, svgcompress, imgcopy, csscopy, jscopy, fontcopy);
const build = gulp.parallel(pug2html, sass, script, imgcompress, webpcompress, svgcompress, csscopy, jscopy, fontcopy);


const htmldev = gulp.parallel(html, sass, script, webpcompress, svgcompress, imgcopy, csscopy, jscopy, fontcopy);
const htmlbuild = gulp.parallel(html, sass, script, imgcompress, webpcompress, svgcompress, csscopy, jscopy, fontcopy);


const otf2ttfconvret = gulp.series(otf2ttf, fonts, fontStyle);
const rename = gulp.series(renamePath);

module.exports.start = gulp.series(clean, dev, serve)
module.exports.build = gulp.series(clean, build)
module.exports.prod = gulp.series(clean, build, rename)


module.exports.hstart = gulp.series(clean, htmldev, serve)
module.exports.hbuild = gulp.series(clean, htmlbuild)
module.exports.hprod = gulp.series(clean, htmlbuild, rename)

module.exports.fconvret = gulp.series(otf2ttfconvret)
//modules
const gulp = require('gulp');
const browsersync = require('browser-sync').create();


//tasks
const pug2html = require('./pug2html')
const html = require('./html')
const sass = require('./scss')
const script = require('./script')
const imgcompress = require('./imgcompress')
const webpcompress = require('./webp')
const svgcompress = require('./svgcompress')
const imgcopy = require('./imgcopy')
const csscopy = require('./csscopy')
const jscopy = require('./jscopy')
const fontcopy = require('./copyFont')
// const fonts = require('./fonts')
// const otf2ttf = require('./otf2ttf')
// const fontStyle = require('./fontStyle')


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    watch: {
        pug2html: source_folder + '/**/*.pug',
        html: source_folder + '/**/*.html',
        json: source_folder + '/json/*.json',
        css: source_folder + '/**/*.scss',
        js: source_folder + '/**/*.js',
        img: source_folder + '/img/**/*.{jpg, png, gif, ico, webp}',
        copyimg: source_folder + '/img/**/*.{jpg, png, gif, ico}',
        svg: source_folder + '/img/**/*.svg',
        copycss: source_folder + '/libs/css/*.css',
        copyjs: source_folder + '/libs/js/*.js',
        copyfonts: source_folder + '/fonts/build/*.*'
    }
}



//reload server
function readyReload(cb) {
    browsersync.reload()
    cb()
}


//server cofig
module.exports = function serve(cb) {
    browsersync.init({
        server: {
            baseDir: './' + prod_folder + '/'
        },
        port: 3000,
        notify: false
    })

    cb();




    //watches over
    gulp.watch([path.watch.pug2html, path.watch.json], gulp.series(pug2html, readyReload));
    gulp.watch([path.watch.html], gulp.series(html, readyReload));
    gulp.watch([path.watch.css], gulp.series(sass, readyReload));
    gulp.watch([path.watch.js], gulp.series(script, readyReload));
    gulp.watch([path.watch.img], gulp.series([imgcompress, webpcompress]));
    gulp.watch([path.watch.copyimg], gulp.series(imgcopy, readyReload));
    gulp.watch([path.watch.svg], gulp.series(svgcompress, readyReload));
    gulp.watch([path.watch.copycss], gulp.series([csscopy, jscopy], readyReload));
    gulp.watch([path.watch.copyfonts], gulp.series(fontcopy, readyReload));
    // gulp.watch([path.watch.fonts], gulp.series([fonts, fontStyle], readyReload));
    // gulp.watch([path.watch.otf2ttf], gulp.series(otf2ttf));
}
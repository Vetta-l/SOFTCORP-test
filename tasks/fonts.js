//modules
const { src, dest } = require('gulp');

const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        font: source_folder + '/fonts/build'
    },
    src: {
        font: source_folder + '/fonts/**/*.ttf'
    }
}



//fonts task
module.exports = function fonts(cb) {
    src(path.src.font)
        .pipe(ttf2woff())
        .pipe(dest(path.build.font))
    return src(path.src.font)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.font))
    cb();
}
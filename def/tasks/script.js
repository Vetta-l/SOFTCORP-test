//modules
const { src, dest } = require('gulp');

const fileinclude = require('gulp-file-include');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const gulpif = require('gulp-if');
const argv = require('yargs').argv;

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        js: prod_folder + '/js/'
    },
    src: {
        js: source_folder + '/js/**/*.js'
    }
}



// script task
module.exports = function script(cb) {
    return src(path.src.js)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'JS',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(fileinclude())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulpif(argv.prod, uglify()))
        .pipe(gulpif(argv.prod, rename({ suffix: '.min' })))
        .pipe(dest(path.build.js));
    cb();
}
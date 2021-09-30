//modules
const { src, dest } = require('gulp');
const webphtml = require('gulp-webp-html');
const fileinclude = require('gulp-file-include');
const prettify = require('gulp-html-prettify');
const htmlValidator = require('gulp-w3c-html-validator');
const htmlmin = require('gulp-htmlmin');
const flatten = require('gulp-flatten');

const glpif = require('gulp-if');
const argv = require('yargs').argv;

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        html: prod_folder + '/'
    },
    src: {
        html: source_folder + '/pages/**/*.html'
    }
}



//html task
module.exports = function html(cb) {
    return src(path.src.html)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'HTML',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(fileinclude())
        .pipe(webphtml())
        .pipe(glpif(!argv.prod, prettify({
            indent_size: 4
        })))
        .pipe(flatten({ includeParents: 0 }))
        .pipe(glpif(!argv.build || !argv.prod, htmlValidator()))
        .pipe(glpif(argv.prod, htmlmin({ collapseWhitespace: true })))
        .pipe(dest(path.build.html))
    cb();
}
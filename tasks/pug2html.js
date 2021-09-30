//modules
const { src, dest } = require('gulp');

const pug = require('gulp-pug');
const webphtml = require('gulp-webp-html');
const fs = require('fs');
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
        pug2html: prod_folder + '/'
    },
    src: {
        pug2html: source_folder + '/pages/**/*.pug',
        json: source_folder + '/json/сonfig.json'
    }
}



//pug2html task
module.exports = function pug2html(cb) {
    return src(path.src.pug2html)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'PUG',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(pug({
            pretty: true,
            locals: {
                meta: JSON.parse(fs.readFileSync(path.src.json, 'utf8'))
            }
        }))
        .pipe(webphtml())
        .pipe(glpif(!argv.prod, prettify({
            indent_size: 4
        })))
        .pipe(flatten({ includeParents: 0 }))
        .pipe(glpif(!(argv.build || argv.prod), htmlValidator.reporter()))
        .pipe(glpif(argv.prod, htmlmin({ collapseWhitespace: true })))
        .pipe(dest(path.build.pug2html))
    cb();
}
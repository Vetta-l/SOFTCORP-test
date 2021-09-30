//modules
const { src, dest } = require('gulp');

const styl = require('gulp-stylus');
const webpcss = require('gulp-webpcss');
const sourcemaps = require('gulp-sourcemaps');
const prefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');
const queries = require('gulp-group-css-media-queries');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const glpif = require('gulp-if');
const argv = require('yargs').argv;

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        css: prod_folder + '/css/'
    },
    src: {
        css: source_folder + '/pages/**/*.styl'
    }
}



//styles task
module.exports = function styles(cb) {
    return src(path.src.css)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'STYLUS',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(glpif(!(argv.build || argv.prod), sourcemaps.init()))
        .pipe(styl({
            compress: false
        }))
        .pipe(webpcss())
        .pipe(prefixer({
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        }))
        .pipe(glpif(!(argv.build || argv.prod), sourcemaps.write('.')))
        .pipe(glpif(argv.build, queries()))
        .pipe(glpif(argv.build, cssbeautify({ indent: '   ' })))
        .pipe(glpif(argv.prod, queries()))
        .pipe(glpif(argv.prod, cleanCss()))
        .pipe(glpif(argv.prod, rename({ suffix: '.min' })))
        .pipe(dest(path.build.css));
    cb();
}
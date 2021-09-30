//modules
const { src, dest } = require('gulp');

const svgmin = require('gulp-svgmin');
const replace = require('gulp-replace');
const cheerio = require('gulp-cheerio');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        img: prod_folder + '/img/'
    },
    src: {
        img: source_folder + '/img/'
    }
}



//svgcompress task
module.exports = function svgcompress(cb) {
    return src(path.src.img + '**/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: false
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                // $('[fill]').removeAttr('fill');
                // $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parseOptions: { xmlMode: true }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(dest(path.build.img))
}
//modules
const { src, dest } = require('gulp');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');


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


//imgcompress task
module.exports = function imgcompress(cb) {
    return src(path.src.img + '**/*.{png,jpg}')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.svgo(),
            imagemin.optipng({ optimizationLevel: 3 }),
            pngquant({ quality: [0.7, 0.8], speed: 5 })
        ]))
        .pipe(dest(path.build.img))
}
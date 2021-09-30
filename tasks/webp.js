//modules
const { src, dest } = require('gulp');

const webp = require('gulp-webp');



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




//webp task
module.exports = function webpcompress(cb) {
    return src(path.src.img + '**/*.{png,jpg}')
        .pipe(webp({ quality: 80 }))
        .pipe(dest(path.build.img))
    cb();
}
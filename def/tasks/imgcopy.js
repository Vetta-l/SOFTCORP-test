//modules
const { src, dest } = require('gulp');

//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        img: prod_folder + '/img/'
    },
    src: {
        img: source_folder + '/img/**/*.{jpg,png,gif,ico,webp}'
    }
}



//imgcopy task
module.exports = function imgcopy(cb) {
    return src(path.src.img)
        .pipe(dest(path.build.img))
    cb();
}
//modules
const { src, dest } = require('gulp');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        copycss: prod_folder + '/css/'
    },
    src: {
        copycss: source_folder + '/libs/css/*.css'
    }
}


//csscopy task
module.exports = function csscopy(cb) {
    return src(path.src.copycss)
        .pipe(dest(path.build.copycss))
    cb();
}
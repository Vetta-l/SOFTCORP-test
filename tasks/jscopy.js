//modules
const { src, dest } = require('gulp');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        copyjs: prod_folder + '/js/'
    },
    src: {
        copyjs: source_folder + '/libs/js/*.js'
    }
}


//js copy task
module.exports = function jscopy(cb) {
    return src(path.src.copyjs)
        .pipe(dest(path.build.copyjs))
    cb();
}
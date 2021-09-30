//modules
const { src, dest } = require('gulp');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        fontcopy: prod_folder + '/fonts/'
    },
    src: {
        fontcopy: source_folder + '/fonts/build/*.*'
    }
}


//fonts copy task
module.exports = function fontcopy(cb) {
    return src(path.src.fontcopy)
        .pipe(dest(path.build.fontcopy))
    cb();
}
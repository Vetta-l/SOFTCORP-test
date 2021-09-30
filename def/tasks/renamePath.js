//modules
const { src, dest } = require('gulp');

const replace = require('gulp-replace');


//variables
const prod_folder = 'dist';

let path = {
    build: {
        html: prod_folder + '/**/*.html'
    }
}



//renamePath task
module.exports = function renamePath(cb) {
    return src(path.build.html)
        .pipe(replace(/\.css/g, '.min.css'))
        .pipe(replace(/\.js/g, '.min.js'))
        .pipe(dest('./' + prod_folder + '/'));
    cb();
}
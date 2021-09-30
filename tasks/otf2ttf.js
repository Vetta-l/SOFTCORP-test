//modules
const { src, dest } = require('gulp');

const fonter = require('gulp-fonter');


//variables
const source_folder = 'src';

let path = {
    src: {
        font: source_folder + '/fonts/**/*.otf'
    }
}



//otf2ttf task
module.exports = function otf2ttf(cb) {
    return src(path.src.font)
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(source_folder + '/fonts/'))
    cb();
}
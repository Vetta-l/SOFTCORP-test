//modules
const del = require('del');

//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    clean: './' + prod_folder + '/',
    fontClean: './' + source_folder + '/fonts/'
}


//clean task
module.exports = function clean() {
    return del([path.clean]);
}
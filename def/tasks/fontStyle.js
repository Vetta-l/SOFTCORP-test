//modules
const gulp = require('gulp');

const fs = require('fs');

//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        font: source_folder + '/fonts/build'
    },
    src: {
        font: source_folder + '/includes/core/styl/fonts.styl'
    }
}


//fontStyle task
module.exports = function fontStyle(cb) {
    fs.writeFileSync(path.src.font, '');
    let file_content = fs.readFileSync(path.src.font);
    if (file_content == '') {
        fs.writeFile(path.src.font, '', cb);
        return fs.readdir(path.build.font, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(path.src.font, 'font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
    cb();
}
/**
 * Created by Chris on 3/11/2016.
 */
"use strict";
const fs = require('fs');
exports.readFilePromise = (filename, options = {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, options, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}; // readFilePromise
exports.changeFileExt = (filename, newExt) => {
    let delimPos = (filename + '.').lastIndexOf('.');
    return filename.substr(0, delimPos) + newExt;
}; // changeFileExt
//# sourceMappingURL=FsUtils.js.map
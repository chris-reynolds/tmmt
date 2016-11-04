/**
 * Created by Chris on 3/11/2016.
 */
"use strict";
const fs = require('fs');
exports.readFilePromise = (filename, encoding = 'utf8') => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}; // readFilePromise
exports.parseFilePromise = (filename, parser) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err)
                reject(err);
            else
                resolve(parser(data));
        });
    });
}; // parseFilePromise
exports.changeFileExt = (filename, newExt) => {
    let delimPos = (filename + '.').lastIndexOf('.');
    return filename.substr(0, delimPos) + newExt;
}; // changeFileExt
//# sourceMappingURL=FsUtils.js.map
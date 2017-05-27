"use strict";
/**
 * Created by Chris on 3/11/2016.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
//import * as glob from 'glob';
let fsDir = require('node-dir');
exports.changeFileExt = (filename, newExt) => {
    let delimPos = (filename + '.').lastIndexOf('.');
    return filename.substr(0, delimPos) + newExt;
}; // changeFileExt
exports.parseFilePromise = (filename, parser) => {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(parser(data));
            });
        }
        catch (ex) {
            reject('failed parseFile ' + ex);
        }
    });
}; // parseFilePromise
exports.readDirPromise = (filemask) => {
    return new Promise((resolve, reject) => {
        try {
            fs.readdir(filemask, (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        }
        catch (ex) {
            reject('failed readDir ' + ex);
        }
    });
}; // readDirPromise
exports.readFilePromise = (filename, encoding = 'utf8') => {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(filename, encoding, (err, data) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        }
        catch (ex) {
            reject('failed readFile ' + ex);
        }
    });
}; // readFilePromise
exports.wildReadDirPromise = (filemask) => {
    function strToRegexp(str) {
        str = str.replace(/~/g, '~1~');
        str = str.replace(/\./g, '~2~');
        str = str.replace(/\*/g, '~3~');
        str = str.replace(/\?/g, '.');
        str = str.replace(/~3~/g, '.*');
        str = str.replace(/~2~/g, '\\.');
        str = str.replace(/~1~/g, '~');
        return '^' + str + '$';
    } // of strToRegExp
    return new Promise((resolve, reject) => {
        try {
            let apath = '.';
            let lastSlash = filemask.lastIndexOf('/');
            if (lastSlash >= 0) {
                apath = filemask.substr(0, lastSlash + 1);
                filemask = filemask.substr(lastSlash + 1);
            }
            fs.readdir(apath, (err, fileList) => {
                if (err)
                    reject(err);
                else {
                    let result = [];
                    let matchExp = RegExp(strToRegexp(filemask)); //'.*\.xml$'));
                    for (let filename of fileList) {
                        if (filename.match(matchExp))
                            result.push(apath + filename);
                    }
                    resolve(result);
                }
            });
        }
        catch (ex) {
            reject('failed wildReadDirPromise ' + ex);
        }
    });
}; // wildReadDirPromise
/*
export let wildReadDirPromise = (filemask:string):Promise<string[]> => {
    return new Promise((resolve, reject) => {
        try {
            let apath = '.';
            let lastSlash = filemask.lastIndexOf('/');
            if (lastSlash>=0) {
                apath = filemask.substr(0,lastSlash+1);
                filemask = filemask.substr(lastSlash+1);
            }
            fsDir.files(apath, {match:filemask}, (err, data:string[]) => {
                if (err)
                    reject(err);
                else
                    resolve(data);
            });
        } catch(ex) {
            reject('failed wildReadDirPromise '+ex);
        }
    });
};  // wildReadDirPromise
*/
exports.writeFilePromise = (filename, contents, encoding = 'utf8') => {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFile(filename, contents, encoding, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(contents);
            });
        }
        catch (ex) {
            reject('failed writeFilePromise ' + ex);
        }
    });
}; // writeFilePromise
//# sourceMappingURL=FsUtils.js.map
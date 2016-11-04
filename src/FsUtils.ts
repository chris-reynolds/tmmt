/**
 * Created by Chris on 3/11/2016.
 */

import fs = require('fs');

export let readFilePromise = (filename:string, encoding:string = 'utf8') => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}  // readFilePromise

export let parseFilePromise = (filename:string, parser:Function) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err)
                reject(err);
            else
                resolve(parser(data));
        });
    });
}  // parseFilePromise

export let changeFileExt = (filename:string, newExt:string):string => {
    let delimPos = (filename+'.').lastIndexOf('.');
    return filename.substr(0,delimPos)+newExt;
}  // changeFileExt


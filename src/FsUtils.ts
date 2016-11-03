/**
 * Created by Chris on 3/11/2016.
 */

import fs = require('fs');

export let readFilePromise = (filename:string, options:any = {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, options, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}  // readFilePromise


export let changeFileExt = (filename:string, newExt:string):string => {
    let delimPos = (filename+'.').lastIndexOf('.');
    return filename.substr(0,delimPos)+newExt;
}  // changeFileExt


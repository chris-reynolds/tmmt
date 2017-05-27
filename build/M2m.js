"use strict";
/**
 * Created by Chris on 18/10/2016.
 */
//import {AnalysisModel} from "./T2m";
//zzz
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const xml2js = require("xml2js");
const FsUtils = require("./FsUtils");
function buildDesignModel(analysisModel) {
    return (new M2m).loadSourceModel(analysisModel);
} // of buildDesignModel
exports.buildDesignModel = buildDesignModel;
function mergeAny(source) {
    let result = {};
    source.forEach((val) => { _.merge(result, val); });
    return result;
} // of mergeAny
function xmlMerge2Json(matches) {
    let filePromises = [];
    for (let matchingFileName of matches) {
        let aFilePromise = FsUtils.readFilePromise(matchingFileName, 'utf8')
            .then(xmlToJsonPromise);
        filePromises.push(aFilePromise);
    } // of file loop
    return Promise.all(filePromises).then(mergeAny); // of then
} // of function xmlMerge2Json
exports.xmlMerge2Json = xmlMerge2Json;
function xmlToJsonPromise(xmlContents) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlContents, (err, thisXml) => {
            if (err)
                reject('Failed to parse xml : ' + err);
            else
                resolve(thisXml);
        }); // of xml parseString callback
    }); // of new Promise
} // of xmlToJsonPromise
class M2m {
    loadSourceModel(sourceModel) {
        return Promise.resolve({ source: 'M2m.loadSourceModel' });
    } // of loadSourceModel
} // of class M2m
//# sourceMappingURL=M2m.js.map
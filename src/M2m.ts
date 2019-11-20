/**
 * Created by Chris on 18/10/2016.
 */
//import {AnalysisModel} from "./T2m";
//zzz

import * as _ from 'lodash';
import * as xml2js from "xml2js";
import * as FsUtils from "./FsUtils";



export function buildDesignModel(analysisModel:any):Promise<string> {
    return (new M2m).loadSourceModel(analysisModel);
} // of buildDesignModel

function mergeAny(source:any[]):any {
  let result :any = {};
  source.forEach( (val) => {_.merge(result,val);});
  return result;
} // of mergeAny



export function xmlMerge2Json(matches:string[]):Promise<any> {
    let filePromises :Promise<any>[] = [];
    for (let matchingFileName of matches) {
        let aFilePromise = FsUtils.readFilePromise(matchingFileName,'utf8')
            .then(xmlToJsonPromise);
        filePromises.push(aFilePromise)
    } // of file loop
    return Promise.all(filePromises).then(mergeAny); // of then
} // of function xmlMerge2Json

function xmlToJsonPromise(xmlContents:string):Promise<any> {
    return new Promise<any>((resolve,reject)=> {
        xml2js.parseString(xmlContents,(err,thisXml:any) => {
            if (err)
                reject('Failed to parse xml : '+err);
            else
               resolve(thisXml);
        }); // of xml parseString callback
    }); // of new Promise
}  // of xmlToJsonPromise

class M2m {
    loadSourceModel(sourceModel:any):Promise<any> {
        return Promise.resolve({source:'M2m.loadSourceModel'})
    } // of loadSourceModel

} // of class M2m





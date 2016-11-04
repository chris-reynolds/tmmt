import {loadAnalysisModel} from "./T2m";
import {buildDesignModel} from "./M2m";
import {M2tPromise} from "./M2t";
import * as fs from "fs";
import * as Utils from "./Utils";
import * as FsUtils from "./FsUtils";

/**
 * Created by Chris on 18/10/2016.
 * This is the driver file to link T2M M2M and M2T
 */

var runArgs = {};
var config:any = {};
(function tmmtMain():void {
    runArgs = process.argv;
    loadConfigurationPromise()
        .then((newConfig:any) => {config = newConfig; loadAnalysisModel(thisModelName(config)) } )
        .then(buildDesignModel)
        .then((designModel:any) => M2tPromise(designModel,thisTargetDir(config)) )
        .catch(finalCatch);
})();  // force immediate execution

function thisModelName(config):string {
    return config.modelName || runArgs[2] || 'jobuniverse';
} // of thisModelName

function thisTargetDir(config):string {
    return config.targetDir || runArgs[3] || '..\\tests';
} // of thisModelName

function loadConfigurationPromise() {
    return new Promise((resolve,reject)=>{
        let currentScript:string = Utils.currentScriptName();
        console.log('currentScript =' + currentScript);
        let configFileName = FsUtils.changeFileExt(currentScript,'.config.json');
        if (fs.existsSync(configFileName))
            resolve(FsUtils.parseFilePromise(configFileName,JSON.parse));
        else // file not existing
            resolve({'notFound':configFileName});
    }); // of new Promise
} // of loadConfigurationPromise

function finalCatch(reason:any):void {
    console.log('CATCH:'+reason.toString());
} // finalCatch

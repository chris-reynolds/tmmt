import {AnalysisModel} from "./T2m";
import * as fs from "fs";
import * as Utils from "./Utils";
import * as FsUtils from "./FsUtils";

/**
 * Created by Chris on 18/10/2016.
 * This is the driver file to link T2M M2M and M2T
 */


(function tmmtMain():void {
    loadConfigurationPromise().then()
})();  // force immediate execution

function fred() {
   let modelName = 'jobuniverse';

   let pim = new AnalysisModel('jobuniverse.sad');

}

function loadConfigurationPromise() {
    return new Promise((resolve,reject)=>{
        let currentScript:string = Utils.currentScriptName();
        console.log('currentScript =' + currentScript);
        let configFileName = FsUtils.changeFileExt(currentScript,'.config.json');
        if (fs.exists(configFileName)) {
            FsUtils.readFilePromise(configFileName)
        }  else // file not existing
            resolve({'notFound':configFileName});
    }); // of new Promise
} // of loadConfigurationPromise

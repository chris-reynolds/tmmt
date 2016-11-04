"use strict";
const T2m_1 = require("./T2m");
const M2m_1 = require("./M2m");
const M2t_1 = require("./M2t");
const fs = require("fs");
const Utils = require("./Utils");
const FsUtils = require("./FsUtils");
/**
 * Created by Chris on 18/10/2016.
 * This is the driver file to link T2M M2M and M2T
 */
var runArgs = {};
var config = {};
(function tmmtMain() {
    runArgs = process.argv;
    loadConfigurationPromise()
        .then((newConfig) => { config = newConfig; T2m_1.loadAnalysisModel(thisModelName(config)); })
        .then(M2m_1.buildDesignModel)
        .then((designModel) => M2t_1.M2tPromise(designModel, thisTargetDir(config)))
        .catch(finalCatch);
})(); // force immediate execution
function thisModelName(config) {
    return config.modelName || runArgs[2] || 'jobuniverse';
} // of thisModelName
function thisTargetDir(config) {
    return config.targetDir || runArgs[3] || '..\\tests';
} // of thisModelName
function loadConfigurationPromise() {
    return new Promise((resolve, reject) => {
        let currentScript = Utils.currentScriptName();
        console.log('currentScript =' + currentScript);
        let configFileName = FsUtils.changeFileExt(currentScript, '.config.json');
        if (fs.existsSync(configFileName))
            resolve(FsUtils.parseFilePromise(configFileName, JSON.parse));
        else
            resolve({ 'notFound': configFileName });
    }); // of new Promise
} // of loadConfigurationPromise
function finalCatch(reason) {
    console.log('CATCH:' + reason.toString());
} // finalCatch
//# sourceMappingURL=tmmtMain.js.map
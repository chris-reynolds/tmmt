"use strict";
const T2m_1 = require("./T2m");
const fs = require("fs");
const Utils = require("./Utils");
const FsUtils = require("./FsUtils");
/**
 * Created by Chris on 18/10/2016.
 * This is the driver file to link T2M M2M and M2T
 */
(function tmmtMain() {
    loadConfigurationPromise().then();
})(); // force immediate execution
function fred() {
    let modelName = 'jobuniverse';
    let pim = new T2m_1.AnalysisModel('jobuniverse.sad');
}
function loadConfigurationPromise() {
    return new Promise((resolve, reject) => {
        let currentScript = Utils.currentScriptName();
        console.log('currentScript =' + currentScript);
        let configFileName = FsUtils.changeFileExt(currentScript, '.config.json');
        if (fs.exists(configFileName)) {
            FsUtils.readFilePromise(configFileName);
        }
        else
            resolve({ 'notFound': configFileName });
    }); // of new Promise
} // of loadConfigurationPromise
//# sourceMappingURL=tmmtMain.js.map
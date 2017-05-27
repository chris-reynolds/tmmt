"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Chris on 18/10/2016.
 * This is the driver file to link T2M M2M and M2T
 */
const M2m_1 = require("./M2m");
const FsUtils = require("./FsUtils");
//let xmlMerge2Json = require('./M2m').xmlMerge2Json;
(function fred() {
    FsUtils.wildReadDirPromise('../testdata/*.xml')
        .then(M2m_1.xmlMerge2Json)
        .then((z) => {
        console.log(JSON.stringify(z));
    }).catch((e) => {
        console.log('Catch error ' + e.toString());
    });
})(); // immediate execution
//# sourceMappingURL=tmmtMain.js.map
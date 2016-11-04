/**
 * Created by Chris on 18/10/2016.
 */
//import {AnalysisModel} from "./T2m";
"use strict";
function buildDesignModel(analysisModel) {
    return (new M2m).loadSourceModel(analysisModel);
}
exports.buildDesignModel = buildDesignModel; // of buildDesignModel
class M2m {
    loadSourceModel(sourceModel) {
        return Promise.resolve({ source: 'M2m.loadSourceModel' });
    } // of loadSourceModel
}
 // of class M2m
//# sourceMappingURL=M2m.js.map
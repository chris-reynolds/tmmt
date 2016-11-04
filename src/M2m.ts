/**
 * Created by Chris on 18/10/2016.
 */
//import {AnalysisModel} from "./T2m";

export function buildDesignModel(analysisModel:any):Promise<string> {
  return (new M2m).loadSourceModel(analysisModel);
} // of buildDesignModel

class M2m {
  loadSourceModel(sourceModel:any):Promise<any> {
    return Promise.resolve({source:'M2m.loadSourceModel'})
  } // of loadSourceModel

} // of class M2m





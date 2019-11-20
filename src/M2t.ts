/**
 * Created by Chris on 18/10/2016.
 */
//import {DesignModel} from "./M2m";

export function M2tPromise(sourceMask:string,targetDirectory:string):Promise<any> {
    // todo : for each xml in the source directory, load and merge into model.
    // todo : for each css in the source directory, load and merge css into proxy
    // todo : for each template in the source directory, create output stream
    // todo : for each output stream, break into output files
    // todo : for each output file, extract existing customcode markers,
    return Promise.resolve('todo: M2tPromise');

} M2tPromise

class M2t {
    constructor(designModel:any,targetDirectory:string) {

    }  // of constructor

}  // of class Generator

class OutputFile {
    constructor(fileName:string) {

    } // of constructor
    loadCustomCodeMarkers() {
        // todo : LoadCustomeMarkersFromOldFile
    } // of end of loadCustomCodeMarkers

    insertCustomerCodeMarkers() {
        // todo :  insertCustomerCodeMarkers
    } // of insertCustomerCodeMarkers

    backupOldFile() {
        // todo : backupOldFile
    } // of backupOldFile

    save() {
        // todo : save
    } // of save

}  // of OutputFile
/**
 * Created by Chris on 18/10/2016.
 * This is the driver file to link T2M M2M and M2T
 */
import {xmlMerge2Json} from "./M2m";
import * as FsUtils from "./FsUtils";

//let xmlMerge2Json = require('./M2m').xmlMerge2Json;


(function fred() {
    FsUtils.wildReadDirPromise('../testdata/*.xml')
        .then(xmlMerge2Json)
        .then(  (z:any)=> {
        console.log(JSON.stringify(z))
    }).catch( (e)=> {
        console.log('Catch error '+e.toString());
    });
})();  // immediate execution
/**
 * Created by Chris on 18/10/2016.
 * This has the responsibility of taking a structured text statement of requirements and outputting a model
 */

import * as fs  from 'fs';
import * as _ from "lodash";
import * as FsUtils from "./FsUtils";

export function loadAnalysisModel(modelName:string):Promise<string> {
  return (new T2m).loadTextFile(modelName);
} // of loadAnalysisModel

class T2m {
   private xmlParser : any;  // todo xml2js typings file
   private model : any;
   loadTextFile( requirementsPath:string):Promise<string> {
   //   todo : load requirements file
   //   todo : check for wildcard requirements path
       this.xmlParser = require('xml2js').Parser();
       return FsUtils.parseFilePromise(requirementsPath,this.xmlParser);
   } // of constructor

   addFile(modelFileName:string) {
       // todo : load a simple requirement file
       // todo : check for nested requirements file
       let maximXMLSource = fs.readFileSync(modelFileName, 'utf8');
       this.xmlParser.parseString(maximXMLSource,function(err,data) {
           if (err)
               console.log('ERROR:' + err);
           else {
               let packages = data.Model.Package;
               let myModel = packages.filter(function (item) {
                   return (item.Stereotype == 'Product')
               })[0];
               myModel.class = myModel.Classes[0].Class;
               this.model = _.merge(this.model,myModel);
           }
       }); // of parseCallback
    } // of addFile

} // of class T2M
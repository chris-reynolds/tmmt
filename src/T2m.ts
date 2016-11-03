/**
 * Created by Chris on 18/10/2016.
 * This has the responsibility of taking a structured text statement of requirements and outputting a model
 */

import fs = require('fs');
//import _ = require("lodash");
import * as _ from "lodash";

export class AnalysisModel {
   private xmlParser : any;  // todo xml2js typings file
   model : any = {};
   constructor( requirementsPath:string) {
   //   todo : load requirements file
   //   todo : check for wildcard requirements path
       this.xmlParser = require('xml2js').Parser();
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

}
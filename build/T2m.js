/**
 * Created by Chris on 18/10/2016.
 * This has the responsibility of taking a structured text statement of requirements and outputting a model
 */
"use strict";
const fs = require('fs');
//import _ = require("lodash");
const _ = require("lodash");
class AnalysisModel {
    constructor(requirementsPath) {
        this.model = {};
        //   todo : load requirements file
        //   todo : check for wildcard requirements path
        this.xmlParser = require('xml2js').Parser();
    } // of constructor
    addFile(modelFileName) {
        // todo : load a simple requirement file
        // todo : check for nested requirements file
        let maximXMLSource = fs.readFileSync(modelFileName, 'utf8');
        this.xmlParser.parseString(maximXMLSource, function (err, data) {
            if (err)
                console.log('ERROR:' + err);
            else {
                let packages = data.Model.Package;
                let myModel = packages.filter(function (item) {
                    return (item.Stereotype == 'Product');
                })[0];
                myModel.class = myModel.Classes[0].Class;
                this.model = _.merge(this.model, myModel);
            }
        }); // of parseCallback
    } // of addFile
}
exports.AnalysisModel = AnalysisModel;
//# sourceMappingURL=T2m.js.map
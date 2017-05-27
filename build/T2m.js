"use strict";
/**
 * Created by Chris on 18/10/2016.
 * This has the responsibility of taking a structured text statement of requirements and outputting a model
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const _ = require("lodash");
const FsUtils = require("./FsUtils");
function loadAnalysisModel(modelName) {
    return FsUtils.readFilePromise(modelName).then(parseMaximFilePromise);
} // of loadAnalysisModel
exports.loadAnalysisModel = loadAnalysisModel;
function parseMaximFilePromise(xmlSource) {
    let xmlParser = require('xml2js').Parser();
    return new Promise((resolve, reject) => {
        xmlParser.parseString(xmlSource, function (err, data) {
            if (err)
                reject('XML ERROR:' + err);
            else {
                let result = {};
                result.packages = data.Model.Package;
                result.myModel = result.packages.filter(function (item) {
                    return (item.Stereotype == 'Product');
                })[0];
                result.myModel.class = result.myModel.Classes[0].Class;
                result.model = _.merge(result.model, result.myModel);
                resolve(result);
            }
        }); // of parseCallback
    }); // of new promise
} // of parseMaximFilePromise
class T2m {
    loadTextFile(requirementsPath) {
        //   todo : load requirements file
        //   todo : check for wildcard requirements path
        this.xmlParser = require('xml2js').Parser();
        return FsUtils.readFilePromise(requirementsPath);
    } // of constructor
    addMaximFile(modelFileName) {
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
} // of class T2M
//# sourceMappingURL=T2m.js.map
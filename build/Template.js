"use strict";
/**
 * Created by Chris on 18/10/2016.
 * This is to insulate the rest of the app from HandleBar and LoDash dependency
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Handlebars = require("handlebars");
class Template {
    constructor() {
        this.initS2S();
    } // of constructor
    initS2S() {
        Handlebars.registerHelper('cc', _.camelCase);
        Handlebars.registerHelper('uf', _.upperFirst);
        Handlebars.registerHelper('Cc', function (s) { return _.upperFirst(_.camelCase(s)); });
    } // of initS2S
} // of class Template
exports.Template = Template;
//# sourceMappingURL=Template.js.map
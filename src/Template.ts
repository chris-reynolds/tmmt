/**
 * Created by Chris on 18/10/2016.
 * This is to insulate the rest of the app from HandleBar and LoDash dependency
 */
/// <reference path="../typings/handlebars.d.ts" />
/// <reference path="../typings/lodash.d.ts" />
/// <reference path="../typings/node.d.ts" />

import _ = require("lodash");
import Handlebars = require("handlebars");
import fs = require("fs");

export class Template {
    constructor() {
        this.initS2S();
    }  // of constructor

    initS2S() {
        Handlebars.registerHelper('cc',_.camelCase);
        Handlebars.registerHelper('uf',_.upperFirst);
        Handlebars.registerHelper('Cc',function(s) {return _.upperFirst(_.camelCase(s))});
    }  // of initS2S
} // of class Template

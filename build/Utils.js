"use strict";
/**
 * Created by Chris on 3/11/2016.
 */
//import Error from 'node.d.ts';
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentScriptName = () => {
    let fakeError = new Error('zzz');
    let fakeErrorLines = fakeError.stack.split('\n');
    let fileName = fakeErrorLines[2].match(/Promise \((.*).js/);
    return fileName[1];
};
//# sourceMappingURL=Utils.js.map
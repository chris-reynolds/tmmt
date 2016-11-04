/**
 * Created by Chris on 18/10/2016.
 */
"use strict";
class DefaultFacade {
    constructor() {
    } // of constructor
    /**
     * This has the responsibility of walking down an object tree, placing a proxy object in front of each object
     * @param targetObj  the is the sourceObject Tree
     * @param aProxy
     * @returns {Object}
     */
    proxyWrapper(targetObj, aProxy) {
        for (let prop in targetObj) {
            if (targetObj.hasOwnProperty(prop)) {
                if (targetObj[prop] instanceof Object)
                    if (Array.isArray(targetObj[prop])) {
                        targetObj[prop].forEach(function (elem, idx, arr) {
                            if (elem instanceof Object)
                                arr[idx] = this.proxyWrapper(elem, aProxy);
                        });
                    }
                    else
                        targetObj[prop] = this.proxyWrapper(targetObj[prop], aProxy);
            } // of hasOwnProperty
        }
        return new Proxy(targetObj, aProxy);
    } // proxyWrapper
}
exports.DefaultFacade = DefaultFacade; // of class DefaultFacade
//# sourceMappingURL=DefaultFacade.js.map
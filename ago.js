/**
 * Ago.js v0.0.1
 * (c) 2017-2018 Zan
 * Released under the MIT License.
 */
// (function (global, factory) {
//     // cmd
//     typeof exports === 'object' && typeof module !== 'undefined' ?
//         module.exports = factory() :
//         // amd
//         typeof define === 'function' && define.amd ? define(factory) :
//             (global.Ago = factory());
// } (this, (function () { 
'use strict';
/*  */


function Ago(options) {
    /*if(process.env.NODE_ENV !== 'prod' && 
    !(this instanceof Ago)) {
        warn('Ago is a constructor and should be called with the `new` keyword');
    }*/
    this._init(options);
}

initMixin(Ago);

return Ago;

// })))
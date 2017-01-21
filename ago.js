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
//             (global.Vue = factory());
// } (this, (function () { 
'use strict';
/*  */

var uid = 0;

function initMixin (Vue) {
    Vue.prototype._init = function (options) {
        var vm = this;
        // a uid
        vm._uid = uid++;
        // a flag to avoid this being observed
        vm._isVue = true;
        // merge options
        if (options && options._isComponent) {
            
        }
    }
}


function Vue(options) {
    /*if(process.env.NODE_ENV !== 'prod' && 
    !(this instanceof Ago)) {
        warn('Ago is a constructor and should be called with the `new` keyword');
    }*/
    this._init(options);
}

initMixin(Vue);

return Vue;

// })))
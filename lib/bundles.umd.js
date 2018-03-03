(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./dumb-components"));
__export(require("./models"));
//services
__export(require("./services"));
//actions
__export(require("./actions"));
//components
__export(require("./smart-components"));
__export(require("./diagram.config"));
__export(require("./diagram.module"));

})));

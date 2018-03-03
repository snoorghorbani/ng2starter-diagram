"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions");
var models_1 = require("../models");
;
exports.initialState = {
    loaded: false,
    diagram: new models_1.GetDiagramsApiModel.Response()
};
function diagramReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case actions_1.DiagramsActionTypes.GET_DIAGRAM: {
            return __assign({}, state, { loaded: true });
        }
        case actions_1.DiagramsActionTypes.GET_DIAGRAM_START: {
            return __assign({}, state, { loaded: true });
        }
        default: {
            return state;
        }
    }
}
exports.diagramReducer = diagramReducer;
exports.DiagramInfo = function (state) { return state.diagram; };
//# sourceMappingURL=diagrams.reducer.js.map
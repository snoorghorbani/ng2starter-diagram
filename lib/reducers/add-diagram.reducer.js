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
    status: 'pristine',
    data: new models_1.AddDiagramApiModel.Request()
};
function addDiagramReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case actions_1.AddDiagramActionTypes.ADD_DIAGRAM: {
            return __assign({}, state, { status: 'dirty', data: new models_1.AddDiagramApiModel.Request() });
        }
        case actions_1.AddDiagramActionTypes.ADD_DIAGRAM_START: {
            return __assign({}, state, { status: 'pending', data: new models_1.AddDiagramApiModel.Request() });
        }
        case actions_1.AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED: {
            return __assign({}, state, { status: 'succeed' });
        }
        case actions_1.AddDiagramActionTypes.ADD_DIAGRAM_FAILED: {
            return __assign({}, state, { status: 'failed' });
        }
        default: {
            return state;
        }
    }
}
exports.addDiagramReducer = addDiagramReducer;
exports.AddDiagramInfo = function (state) { return state.data; };
//# sourceMappingURL=add-diagram.reducer.js.map
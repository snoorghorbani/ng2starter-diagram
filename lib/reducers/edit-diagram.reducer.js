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
    data: new models_1.EditDiagramApiModel.Response()
};
function Reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case actions_1.EditDiagramActionTypes.EDIT_DIAGRAM: {
            return __assign({}, state, { status: 'dirty', data: new models_1.EditDiagramApiModel.Response() });
        }
        case actions_1.EditDiagramActionTypes.EDIT_DIAGRAM_START: {
            return __assign({}, state, { status: 'pending', data: new models_1.EditDiagramApiModel.Response() });
        }
        case actions_1.EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED: {
            return __assign({}, state, { status: 'succeed' });
        }
        case actions_1.EditDiagramActionTypes.EDIT_DIAGRAM_FAILED: {
            return __assign({}, state, { status: 'failed' });
        }
        default: {
            return state;
        }
    }
}
exports.Reducer = Reducer;
exports.EditDiagramInfo = function (state) { return state.data; };
//# sourceMappingURL=edit-diagram.reducer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditDiagramActionTypes;
(function (EditDiagramActionTypes) {
    EditDiagramActionTypes["EDIT_DIAGRAM"] = "[DIAGRAM][EDIT] EDIT_DIAGRAM";
    EditDiagramActionTypes["EDIT_DIAGRAM_START"] = "[DIAGRAM][EDIT] EDIT_DIAGRAM_START";
    EditDiagramActionTypes["EDIT_DIAGRAM_SUCCEED"] = "[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED";
    EditDiagramActionTypes["EDIT_DIAGRAM_FAILED"] = "[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED";
})(EditDiagramActionTypes = exports.EditDiagramActionTypes || (exports.EditDiagramActionTypes = {}));
var EditDiagramAction = /** @class */ (function () {
    function EditDiagramAction(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM;
    }
    return EditDiagramAction;
}());
exports.EditDiagramAction = EditDiagramAction;
var EditDiagramActionStart = /** @class */ (function () {
    function EditDiagramActionStart(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_START;
    }
    return EditDiagramActionStart;
}());
exports.EditDiagramActionStart = EditDiagramActionStart;
var EditDiagramActionSucceed = /** @class */ (function () {
    function EditDiagramActionSucceed(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED;
    }
    return EditDiagramActionSucceed;
}());
exports.EditDiagramActionSucceed = EditDiagramActionSucceed;
var EditDiagramActionFailed = /** @class */ (function () {
    function EditDiagramActionFailed() {
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_FAILED;
    }
    return EditDiagramActionFailed;
}());
exports.EditDiagramActionFailed = EditDiagramActionFailed;
//# sourceMappingURL=edit-diagram.actions.js.map
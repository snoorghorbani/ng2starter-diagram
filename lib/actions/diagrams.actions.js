"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiagramsActionTypes;
(function (DiagramsActionTypes) {
    DiagramsActionTypes["GET_DIAGRAM"] = "[DIAGRAM] GET_DIAGRAM";
    DiagramsActionTypes["GET_DIAGRAM_START"] = "[DIAGRAM] GET_DIAGRAM_START";
    DiagramsActionTypes["GET_DIAGRAM_SUCCEED"] = "[DIAGRAM] GET_DIAGRAM_SUCCEED";
    DiagramsActionTypes["GET_DIAGRAM_FAILED"] = "[DIAGRAM] GET_DIAGRAM_FAILED";
})(DiagramsActionTypes = exports.DiagramsActionTypes || (exports.DiagramsActionTypes = {}));
var GetDiagrams = /** @class */ (function () {
    function GetDiagrams() {
        this.type = DiagramsActionTypes.GET_DIAGRAM;
    }
    return GetDiagrams;
}());
exports.GetDiagrams = GetDiagrams;
var GetDiagramsStart = /** @class */ (function () {
    function GetDiagramsStart() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
    return GetDiagramsStart;
}());
exports.GetDiagramsStart = GetDiagramsStart;
var GetDiagramsSucceed = /** @class */ (function () {
    function GetDiagramsSucceed(payload) {
        this.payload = payload;
        this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
    }
    return GetDiagramsSucceed;
}());
exports.GetDiagramsSucceed = GetDiagramsSucceed;
var GetDiagramsFailed = /** @class */ (function () {
    function GetDiagramsFailed() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
    }
    return GetDiagramsFailed;
}());
exports.GetDiagramsFailed = GetDiagramsFailed;
//# sourceMappingURL=diagrams.actions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddDiagramActionTypes;
(function (AddDiagramActionTypes) {
    AddDiagramActionTypes["ADD_DIAGRAM"] = "[DIAGRAM][ADD] ADD_DIAGRAM";
    AddDiagramActionTypes["ADD_DIAGRAM_START"] = "[DIAGRAM][ADD] ADD_DIAGRAM_START";
    AddDiagramActionTypes["ADD_DIAGRAM_SUCCEED"] = "[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED";
    AddDiagramActionTypes["DIAGRAM_CONFIG_CHANGED"] = "[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED";
    AddDiagramActionTypes["ADD_DIAGRAM_FAILED"] = "[DIAGRAM][ADD] ADD_DIAGRAM_FAILED";
    AddDiagramActionTypes["STRUCTURE_DEFINITION_START"] = "[DIAGRAM][ADD] STRUCTURE_DEFINITION_START";
    AddDiagramActionTypes["HAVE_ENDPOINT"] = "[DIAGRAM][ADD] HAVE_STRUCTURE";
    AddDiagramActionTypes["DATA_LOADED"] = "[DIAGRAM][ADD] DATA_LOADED";
    AddDiagramActionTypes["STRUCTURE_DEFINITION_END"] = "[DIAGRAM][ADD] STRUCTURE_DEFINITION_END";
    AddDiagramActionTypes["COLUMNS_MAPPING_CHANGED"] = "[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED";
    AddDiagramActionTypes["DATA_CALCULATED"] = "[DIAGRAM][ADD] DATA_CALCULATED";
    AddDiagramActionTypes["COLUMN_ADDED"] = "[DIAGRAM][ADD] COLUMN_ADDED";
    AddDiagramActionTypes["GENERATE_DIAGRAM"] = "[DIAGRAM][ADD] GENERATE_DIAGRAM";
})(AddDiagramActionTypes = exports.AddDiagramActionTypes || (exports.AddDiagramActionTypes = {}));
var AddDiagramAction = /** @class */ (function () {
    function AddDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM;
    }
    return AddDiagramAction;
}());
exports.AddDiagramAction = AddDiagramAction;
var AddDiagramActionStart = /** @class */ (function () {
    function AddDiagramActionStart(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
    }
    return AddDiagramActionStart;
}());
exports.AddDiagramActionStart = AddDiagramActionStart;
var AddDiagramActionSucceed = /** @class */ (function () {
    function AddDiagramActionSucceed(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
    }
    return AddDiagramActionSucceed;
}());
exports.AddDiagramActionSucceed = AddDiagramActionSucceed;
var AddDiagramActionFailed = /** @class */ (function () {
    function AddDiagramActionFailed() {
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
    }
    return AddDiagramActionFailed;
}());
exports.AddDiagramActionFailed = AddDiagramActionFailed;
var DiagramConfigChangedAction = /** @class */ (function () {
    function DiagramConfigChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
    }
    return DiagramConfigChangedAction;
}());
exports.DiagramConfigChangedAction = DiagramConfigChangedAction;
var HaveEndpointAction = /** @class */ (function () {
    function HaveEndpointAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
    }
    return HaveEndpointAction;
}());
exports.HaveEndpointAction = HaveEndpointAction;
var DataLoadedAction = /** @class */ (function () {
    function DataLoadedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_LOADED;
    }
    return DataLoadedAction;
}());
exports.DataLoadedAction = DataLoadedAction;
var StructureDefinitionStartAction = /** @class */ (function () {
    function StructureDefinitionStartAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
    }
    return StructureDefinitionStartAction;
}());
exports.StructureDefinitionStartAction = StructureDefinitionStartAction;
var StructureDefinitionFinishedAction = /** @class */ (function () {
    function StructureDefinitionFinishedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
    }
    return StructureDefinitionFinishedAction;
}());
exports.StructureDefinitionFinishedAction = StructureDefinitionFinishedAction;
var ColumnsMappingChangedAction = /** @class */ (function () {
    function ColumnsMappingChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
    }
    return ColumnsMappingChangedAction;
}());
exports.ColumnsMappingChangedAction = ColumnsMappingChangedAction;
var DataCalculatedAction = /** @class */ (function () {
    function DataCalculatedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_CALCULATED;
    }
    return DataCalculatedAction;
}());
exports.DataCalculatedAction = DataCalculatedAction;
var GenerateDiagramAction = /** @class */ (function () {
    function GenerateDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.GENERATE_DIAGRAM;
    }
    return GenerateDiagramAction;
}());
exports.GenerateDiagramAction = GenerateDiagramAction;
var ColumnAdded = /** @class */ (function () {
    function ColumnAdded() {
        this.type = AddDiagramActionTypes.COLUMN_ADDED;
    }
    return ColumnAdded;
}());
exports.ColumnAdded = ColumnAdded;
//# sourceMappingURL=add-diagram.actions.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
var actions_1 = require("../actions");
var services_1 = require("../services");
var AddDiagramEffects = /** @class */ (function () {
    function AddDiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.addDiagramRequest$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.ADD_DIAGRAM)
            .map(effects_1.toPayload)
            .map(function (data) { return new actions_1.AddDiagramActionStart(data); });
        this.addDiagram$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.ADD_DIAGRAM_START)
            .map(effects_1.toPayload)
            .switchMap(function (data) {
            return _this.diagramService
                .addDiagram(data)
                .map(function (res) { return new actions_1.AddDiagramActionSucceed(res); })
                .catch(function () { return Observable_1.Observable.of(new actions_1.AddDiagramActionFailed()); });
        });
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED)
            .map(effects_1.toPayload)
            .map(function (data) {
            debugger;
            _this.router.navigate(["diagrams"]);
            return Observable_1.Observable.empty();
        });
        this.HAVE_ENDPOINT$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.HAVE_ENDPOINT)
            .map(effects_1.toPayload)
            .map(function (data) { return new actions_1.DataLoadedAction(data); });
        this.DATA_LOADED$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.DATA_LOADED)
            .map(effects_1.toPayload)
            .map(function (data) { return new actions_1.StructureDefinitionStartAction(data); });
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED)
            .map(effects_1.toPayload)
            .map(function (data) { return new actions_1.GenerateDiagramAction(data); });
        this.STRUCTURE_DEFINITION_START$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.STRUCTURE_DEFINITION_START)
            .map(effects_1.toPayload)
            .switchMap(function (data) {
            return data.getDataStructure().map(function () { return new actions_1.StructureDefinitionFinishedAction(data); });
        });
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED)
            .map(effects_1.toPayload)
            .switchMap(function (data) {
            debugger;
            return data.calculateColumns().map(function () { return new actions_1.StructureDefinitionFinishedAction(data); });
        });
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.STRUCTURE_DEFINITION_END)
            .map(effects_1.toPayload)
            .switchMap(function (data) {
            return data.calculateColumns().map(function () { return new actions_1.GenerateDiagramAction(data); });
        });
        this.GenerateDiagram$ = this.actions$
            .ofType(actions_1.AddDiagramActionTypes.GENERATE_DIAGRAM)
            .map(effects_1.toPayload)
            .map(function (data) { return data.generateDiagram(); });
    }
    AddDiagramEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AddDiagramEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.DiagramService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "addDiagramRequest$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "addDiagram$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "ADD_DIAGRAM_SUCCEED$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "HAVE_ENDPOINT$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "DATA_LOADED$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "DIAGRAM_CONFIG_CHANGED$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_START$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "COLUMNS_MAPPING_CHANGED$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_END$", void 0);
    __decorate([
        effects_1.Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], AddDiagramEffects.prototype, "GenerateDiagram$", void 0);
    return AddDiagramEffects;
}());
exports.AddDiagramEffects = AddDiagramEffects;
//# sourceMappingURL=add-diagram.effects.js.map
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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
var actions_1 = require("../actions");
var services_1 = require("../services");
var operators_1 = require("rxjs/operators");
var DiagramEffects = /** @class */ (function () {
    function DiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.DiagramRequest$ = this.actions$
            .ofType()
            .pipe(operators_1.map(function (action) { return action.payload; }), operators_1.map(function (data) { return new actions_1.GetDiagramsStart(); }));
        this.getDiagram$ = this.actions$
            .ofType()
            .pipe(operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (data) {
            return _this.diagramService.getDiagrams()
                .pipe(operators_1.map(function (res) { return new actions_1.GetDiagramsSucceed(res); }), operators_1.catchError(function () { return Observable_1.Observable.of(new actions_1.GetDiagramsFailed()); }));
        }));
    }
    DiagramEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DiagramEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.DiagramService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], DiagramEffects.prototype, "DiagramRequest$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], DiagramEffects.prototype, "getDiagram$", void 0);
    return DiagramEffects;
}());
exports.DiagramEffects = DiagramEffects;
//# sourceMappingURL=diagrams.effects.js.map
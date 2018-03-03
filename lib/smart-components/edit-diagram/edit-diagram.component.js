"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var store_1 = require("@ngrx/store");
var models_1 = require("../../models");
var actions_1 = require("../../actions");
var EditDiagramComponent = /** @class */ (function () {
    function EditDiagramComponent(diagramService, route, store) {
        var _this = this;
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = models_1.EditDiagramApiModel.Request.formGroup;
        var Route = this.route.params.subscribe(function (params) {
            var diagramId = params["id"];
            _this.diagramService.getDiagram(diagramId).subscribe(function (data) { return _this.formGroup.patchValue(data); });
        });
    }
    EditDiagramComponent.prototype.ngOnInit = function () { };
    EditDiagramComponent.prototype.add = function (event) {
        this.store.dispatch(new actions_1.EditDiagramAction(this.formGroup.value));
    };
    EditDiagramComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "diagram-edit",
                    template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">     <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">          <mat-card-header>             <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>         </mat-card-header>          <mat-card-content>             <mat-form-field fxFlexFill>                 <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">             </mat-form-field>             <mat-form-field fxFlexFill>                 <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">             </mat-form-field>              <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>          </mat-card-content>         <mat-card-actions>             <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>             <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>         </mat-card-actions>     </form> </mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    EditDiagramComponent.ctorParameters = function () { return [
        { type: services_1.DiagramService, },
        { type: router_1.ActivatedRoute, },
        { type: store_1.Store, },
    ]; };
    return EditDiagramComponent;
}());
exports.EditDiagramComponent = EditDiagramComponent;
//# sourceMappingURL=edit-diagram.component.js.map
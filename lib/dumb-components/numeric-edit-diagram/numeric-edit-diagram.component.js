"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var services_1 = require("../../services");
var NumericEditDiagramComponent = /** @class */ (function () {
    function NumericEditDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject_1.BehaviorSubject(false);
        this.data = this.injector.get('data');
    }
    Object.defineProperty(NumericEditDiagramComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    ;
    NumericEditDiagramComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        this.diagramService.getData(this.data.Source)
            .subscribe(function (data) {
            debugger;
        });
    };
    NumericEditDiagramComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'numeric-edit-diagram',
                    template: "<mat-card *ngIf=\"dataLoaded | async\" class=\"diagram-box\">   <mat-card-header>     <mat-card-title fxLayoutAlign=\"space-between center\">     </mat-card-title>   </mat-card-header>   <mat-card-content>   </mat-card-content> </mat-card>",
                    styles: [":host {   width: 100%; }  .diagram-box {   margin: 15px; }  .numeric {   font-size: 3em;   line-height: 1.8;   font-family: iran-sans-bold, Tahoma; } .numeric.title {   font-size: 1.5em; }"]
                },] },
    ];
    /** @nocollapse */
    NumericEditDiagramComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
        { type: services_1.DiagramService, },
    ]; };
    NumericEditDiagramComponent.propDecorators = {
        "data": [{ type: core_1.Input },],
    };
    return NumericEditDiagramComponent;
}());
exports.NumericEditDiagramComponent = NumericEditDiagramComponent;
//# sourceMappingURL=numeric-edit-diagram.component.js.map
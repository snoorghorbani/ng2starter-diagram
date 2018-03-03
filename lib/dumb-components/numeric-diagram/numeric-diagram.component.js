"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var services_1 = require("../../services");
var NumericDiagramComponent = /** @class */ (function () {
    function NumericDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject_1.BehaviorSubject(false);
        this.data = this.injector.get('data');
        this.counter = 0;
    }
    Object.defineProperty(NumericDiagramComponent.prototype, "data", {
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
    NumericDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSubscribtion = this.diagramService.getData(this.data.Source)
            .subscribe(function (data) {
            var counter = _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings);
            _this.counter = counter[0][1];
        });
    };
    NumericDiagramComponent.prototype.ngOnDestroy = function () {
        this.dataSubscribtion.unsubscribe();
    };
    NumericDiagramComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'diagram-numeric',
                    template: "<div *ngIf=\"dataLoaded | async\">   <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{data.Source.Data | json}}</div> -->   <div fxLayoutAlign=\"center center\" class=\"numeric\">{{counter}}</div>   <div [id]=\"'diagram_' + data._id\"></div> </div>",
                    styles: [":host {   width: 100%; }  .diagram-box { }  .numeric {   font-size: 3em;   line-height: 1.8;   font-family: iran-sans-bold, Tahoma; } .numeric.title {   font-size: 1.5em; }  .mat-card {   padding: 0; }"]
                },] },
    ];
    /** @nocollapse */
    NumericDiagramComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
        { type: services_1.DiagramService, },
    ]; };
    NumericDiagramComponent.propDecorators = {
        "data": [{ type: core_1.Input },],
    };
    return NumericDiagramComponent;
}());
exports.NumericDiagramComponent = NumericDiagramComponent;
//# sourceMappingURL=numeric-diagram.component.js.map
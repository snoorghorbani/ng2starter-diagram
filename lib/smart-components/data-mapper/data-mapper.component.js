"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var store_1 = require("@ngrx/store");
var DataMapperComponent = /** @class */ (function () {
    function DataMapperComponent(diagramService, store) {
        this.diagramService = diagramService;
        this.store = store;
        this.dataReport = [];
    }
    Object.defineProperty(DataMapperComponent.prototype, "data", {
        set: function (data) {
            if (!data)
                return;
            this.dataReport = _.report(data);
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    DataMapperComponent.prototype.ngOnInit = function () { };
    DataMapperComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "data-mapper",
                    template: "<div fxLayout=\"row\">     <div fxFlex=\"grow\">         <b>             Key         </b>     </div>     <div fxFlex=\"nogrow\">         <b>             Type         </b>     </div> </div> <div *ngFor=\"let item of dataReport\" [class]=\"'depts_' + item.depts\" fxLayout=\"row\">     <div fxFlex=\"grow\">         {{item.name}}     </div>     <div fxFlex=\"nogrow\">         {{item.type}}     </div> </div>",
                    styles: ["mat-radio-button {     width: 100%;     display: block; }  div.depts_2 {     margin-right:25px; }  div.depts_3 {     margin-right:50px; }"]
                },] },
    ];
    /** @nocollapse */
    DataMapperComponent.ctorParameters = function () { return [
        { type: services_1.DiagramService, },
        { type: store_1.Store, },
    ]; };
    DataMapperComponent.propDecorators = {
        "destination": [{ type: core_1.Input },],
        "data": [{ type: core_1.Input },],
    };
    return DataMapperComponent;
}());
exports.DataMapperComponent = DataMapperComponent;
//# sourceMappingURL=data-mapper.component.js.map
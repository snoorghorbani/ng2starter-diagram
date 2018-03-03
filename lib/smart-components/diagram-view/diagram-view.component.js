"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var diagramViewComponent = /** @class */ (function () {
    function diagramViewComponent(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
    }
    diagramViewComponent.prototype.ngOnInit = function () {
        this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
    };
    diagramViewComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "diagram-view",
                    template: "<div *ngIf=\"diagramData$ | async\" [style.color]=\"(diagramData$ | async)?.Box.Color\">     <dynamic-component-selector class=\"diagram-box\" [data]=\"(diagramData$ | async)\"></dynamic-component-selector> </div>",
                    styles: [":host{     width:  100%;     margin: 12.5px; }  .diagram-box{     margin : 15px; }  .diagram-box .c3 {   direction: ltr; } .widget-title {   font: 1.3em IRANSans, tahoma; }"],
                },] },
    ];
    /** @nocollapse */
    diagramViewComponent.ctorParameters = function () { return [
        { type: services_1.DiagramService, },
    ]; };
    diagramViewComponent.propDecorators = {
        "diagramId": [{ type: core_1.Input, args: ['id',] },],
    };
    return diagramViewComponent;
}());
exports.diagramViewComponent = diagramViewComponent;
//# sourceMappingURL=diagram-view.component.js.map
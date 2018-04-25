"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var numeric_diagram_1 = require("../../dumb-components/numeric-diagram");
var server_status_diagram_1 = require("../../dumb-components/server-status-diagram");
var server_connecting_time_diagram_1 = require("../../dumb-components/server-connecting-time-diagram");
var diagram_1 = require("../../smart-components/diagram");
var DynamicComponentSelectorComponent = /** @class */ (function () {
    function DynamicComponentSelectorComponent(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            bar: diagram_1.DiagramComponent,
            donut: diagram_1.DiagramComponent,
            pie: diagram_1.DiagramComponent,
            scatter: diagram_1.DiagramComponent,
            line: diagram_1.DiagramComponent,
            area: diagram_1.DiagramComponent,
            "area-spline": diagram_1.DiagramComponent,
            numero: numeric_diagram_1.NumericDiagramComponent,
            booleano: server_status_diagram_1.ServerStatusDiagramComponent,
            tempo: server_connecting_time_diagram_1.ServerConnectingTimeDiagramComponent
        };
        this.currentComponent = null;
        this.backgroundColor = "";
    }
    Object.defineProperty(DynamicComponentSelectorComponent.prototype, "data", {
        set: function (data) {
            if (!data || Object.keys(data).length == 0)
                return;
            this.backgroundColor = data.Box.BackgroundColor;
            this._data = data;
            var raw = { data: data };
            var _component = this.typeMapToDiagram[data.Chart.data.type];
            var inputProviders = Object.keys(raw).map(function (inputName) {
                return { provide: inputName, useValue: raw[inputName] };
            });
            var resolvedInputs = core_1.ReflectiveInjector.resolve(inputProviders);
            var injector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var factory = this.resolver.resolveComponentFactory(_component);
            var component = factory.create(injector);
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    DynamicComponentSelectorComponent.prototype.ngAfterViewInit = function () { };
    DynamicComponentSelectorComponent.prototype.timeChange = function (e) {
        this.currentComponent._component.timeChange(e);
    };
    DynamicComponentSelectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "dynamic-component-selector",
                    template: "<mat-card class=\"diagram-box\" [style.background]=\"backgroundColor\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">     <div fxFlex=\"0 0 auto\" *ngIf=\"_data\" fxLayoutAlign=\"space-between center\">         <span fxLayoutAlign=\"start center\" class=\"widget-title\">             {{_data.Name}}         </span>         <a [routerLink]=\"['edit' ,  _data._id]\" fxLayoutAlign=\"center center\" mat-icon-button color=\"primary\">             <mat-icon aria-label=\"edit diagram\">edit</mat-icon>         </a>     </div>     <!-- <mat-card-content> -->     <!-- <mat-slider invert [(ngModel)]=\"time\" (change)=\"timeChange($event)\"></mat-slider> -->     <mat-slider class=\"over\" fxFlex=\"0 0 auto\" invert min='1' max='1000' value=\"1000\" (change)=\"timeChange($event)\"></mat-slider>     <div fxFlex=\"1 1 auto\" class=\"widget-container\">         <div #dynamicComponentContainer></div>     </div>     <!-- </mat-card-content> --> </mat-card>",
                    styles: [":host { \twidth: 100%; \tmargin: 12.5px; }  .diagram-box { \tmargin: 15px; }  .diagram-box .c3 { \tdirection: ltr; } .widget-title { \tfont: 1.3em IRANSans, tahoma; } .over { \tvisibility: hidden; \topacity: 0; \tposition: absolute; \ttop: 60px; \tleft: 0; \tright: 0; \tbackground: #fff; \tz-index: 3; \ttransition: all .4s ease-in-out; }"],
                    // entryComponents: [DiagramComponent, NumericDiagramComponent]
                    entryComponents: [
                        numeric_diagram_1.NumericDiagramComponent,
                        server_connecting_time_diagram_1.ServerConnectingTimeDiagramComponent,
                        server_status_diagram_1.ServerStatusDiagramComponent,
                        diagram_1.DiagramComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicComponentSelectorComponent.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
    ]; };
    DynamicComponentSelectorComponent.propDecorators = {
        "dynamicComponentContainer": [{ type: core_1.ViewChild, args: ["dynamicComponentContainer", { read: core_1.ViewContainerRef },] },],
        "widgetComponent": [{ type: core_1.ViewChild, args: [diagram_1.DiagramComponent,] },],
        "data": [{ type: core_1.Input },],
    };
    return DynamicComponentSelectorComponent;
}());
exports.DynamicComponentSelectorComponent = DynamicComponentSelectorComponent;
//# sourceMappingURL=dynamic-component-selector.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var diagram_partial_config_edit_1 = require("../../dumb-components/diagram-partial-config-edit");
var pie_diagram_partial_config_1 = require("../../dumb-components/pie-diagram-partial-config");
var booleano_widget_partial_config_1 = require("../../dumb-components/booleano-widget-partial-config");
var dumb_components_1 = require("../../dumb-components");
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    function DynamicConfigComponentSelectorComponent(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            bar: diagram_partial_config_edit_1.DiagramPartialConfigEditComponent,
            area: dumb_components_1.LinearDiagramPartialConfigComponent,
            "area-spline": dumb_components_1.LinearDiagramPartialConfigComponent,
            donut: diagram_partial_config_edit_1.DiagramPartialConfigEditComponent,
            pie: pie_diagram_partial_config_1.PieDiagramPartialConfigComponent,
            scatter: diagram_partial_config_edit_1.DiagramPartialConfigEditComponent,
            line: dumb_components_1.LinearDiagramPartialConfigComponent,
            booleano: booleano_widget_partial_config_1.BooleanoWidgetPartialConfigComponent
        };
        this.ConfigChanged = new core_1.EventEmitter();
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        set: function (data) {
            var _this = this;
            if (!data || Object.keys(data).length == 0)
                return;
            if (!(data.type in this.typeMapToDiagram)) {
                if (this.currentComponent)
                    this.currentComponent.destroy();
                return;
            }
            var _component = this.typeMapToDiagram[data.type];
            var inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: data.inputs[inputName] };
            });
            var resolvedInputs = core_1.ReflectiveInjector.resolve(inputProviders);
            var injector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var factory = this.resolver.resolveComponentFactory(_component);
            debugger;
            var component = factory.create(injector);
            if (component.instance.ConfigChanged)
                component.instance.ConfigChanged.subscribe(function () {
                    debugger;
                    _this.ConfigChanged.emit();
                });
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = function () { };
    DynamicConfigComponentSelectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "dynamic-config-component-selector",
                    template: "<div #dynamicComponentContainer></div>",
                    styles: [":host{     width: 100%; }  .diagram-box{     margin : 15px; }  .diagram-box .c3 {   direction: ltr; }"],
                    entryComponents: [
                        diagram_partial_config_edit_1.DiagramPartialConfigEditComponent,
                        pie_diagram_partial_config_1.PieDiagramPartialConfigComponent,
                        dumb_components_1.LinearDiagramPartialConfigComponent,
                        booleano_widget_partial_config_1.BooleanoWidgetPartialConfigComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
    ]; };
    DynamicConfigComponentSelectorComponent.propDecorators = {
        "dynamicComponentContainer": [{ type: core_1.ViewChild, args: ["dynamicComponentContainer", { read: core_1.ViewContainerRef },] },],
        "ConfigChanged": [{ type: core_1.Output },],
        "data": [{ type: core_1.Input },],
    };
    return DynamicConfigComponentSelectorComponent;
}());
exports.DynamicConfigComponentSelectorComponent = DynamicConfigComponentSelectorComponent;
//# sourceMappingURL=dynamic-config-component-selector.component.js.map
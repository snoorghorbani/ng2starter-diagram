"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
// import * as appReducer from 'app/reducers';
var DiagramModuleContainerComponent = /** @class */ (function () {
    function DiagramModuleContainerComponent(service) {
        this.service = service;
    }
    DiagramModuleContainerComponent.prototype.ngOnInit = function () {
    };
    DiagramModuleContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'diagram-module-container',
                    template: "<div fxflex=\"100\" fxLayout=\"column\">     <router-outlet></router-outlet> </div>"
                },] },
    ];
    /** @nocollapse */
    DiagramModuleContainerComponent.ctorParameters = function () { return [
        { type: services_1.DiagramService, },
    ]; };
    return DiagramModuleContainerComponent;
}());
exports.DiagramModuleContainerComponent = DiagramModuleContainerComponent;
//# sourceMappingURL=diagram-module-container.component.js.map
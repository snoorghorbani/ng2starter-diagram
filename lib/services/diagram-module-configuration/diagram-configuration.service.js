"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var diagram_config_1 = require("../../diagram.config");
var DiagramConfigurationService = /** @class */ (function () {
    function DiagramConfigurationService(config) {
        this._config = Object.assign({}, diagram_config_1.MODULE_DEFAULT_CONFIG, config);
    }
    Object.defineProperty(DiagramConfigurationService.prototype, "config", {
        get: function () { return this._config; },
        enumerable: true,
        configurable: true
    });
    DiagramConfigurationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DiagramConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [diagram_config_1.MODULE_CONFIG_TOKEN,] },] },
    ]; };
    return DiagramConfigurationService;
}());
exports.DiagramConfigurationService = DiagramConfigurationService;
//# sourceMappingURL=diagram-configuration.service.js.map
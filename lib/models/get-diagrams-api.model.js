"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetDiagramsApiModel;
(function (GetDiagramsApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        Request.prototype.getRequestBody = function () {
            return {};
        };
        return Request;
    }());
    GetDiagramsApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetDiagramsApiModel.Response = Response;
})(GetDiagramsApiModel = exports.GetDiagramsApiModel || (exports.GetDiagramsApiModel = {}));
//# sourceMappingURL=get-diagrams-api.model.js.map
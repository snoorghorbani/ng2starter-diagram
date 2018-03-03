"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var EditDiagramApiModel;
(function (EditDiagramApiModel) {
    var Request = /** @class */ (function () {
        function Request(params) {
        }
        Request.prototype.getRequestQueryParams = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            // TODO: 
            get: 
            // TODO:
            function () {
                return new forms_1.FormGroup({
                    Name: new forms_1.FormControl('', [forms_1.Validators.required]),
                    IsActive: new forms_1.FormControl('true', [forms_1.Validators.required]),
                    Route: new forms_1.FormControl('', [forms_1.Validators.required]),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditDiagramApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditDiagramApiModel.Response = Response;
})(EditDiagramApiModel = exports.EditDiagramApiModel || (exports.EditDiagramApiModel = {}));
//# sourceMappingURL=edit-diagram-api.model.js.map
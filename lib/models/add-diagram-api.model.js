"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            debugger;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {
                _id: this._id,
                Name: this.Name,
                IsActive: this.IsActive,
                Source: this.Source,
                Type: this.Type,
                Groups: this.Groups,
                Widget: {
                    booleano: this.booleano
                },
                Chart: {
                    data: {
                        type: this.Type,
                        columns: this.columns,
                        colors: this.Colors,
                        types: this.Types
                    },
                    ColumnMappings: this.ColumnMappings,
                    Flow: this.Flow,
                    legend: {
                        show: this.Legend
                    },
                    subchart: {
                        show: this.Subchart
                    },
                    zoom: {
                        enabled: this.Zoom
                    },
                    tooltip: {
                        grouped: this.Tooltip
                    }
                },
                Box: {
                    Cols: this.Cols,
                    Rows: this.Rows,
                    TextColor: this.TextColor,
                    BackgroundColor: this.BackgroundColor
                }
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    _id: new forms_1.FormControl("", []),
                    Name: new forms_1.FormControl("", [forms_1.Validators.required]),
                    Sync: new forms_1.FormControl(0, [forms_1.Validators.required]),
                    IsActive: new forms_1.FormControl("true", [forms_1.Validators.required]),
                    Type: new forms_1.FormControl("pie", [forms_1.Validators.required]),
                    Groups: new forms_1.FormControl("", [forms_1.Validators.required]),
                    Legend: new forms_1.FormControl("true", [forms_1.Validators.required]),
                    Subchart: new forms_1.FormControl("false", [forms_1.Validators.required]),
                    Zoom: new forms_1.FormControl("false", [forms_1.Validators.required]),
                    Tooltip: new forms_1.FormControl("false", [forms_1.Validators.required]),
                    Route: new forms_1.FormControl("", [forms_1.Validators.required]),
                    Source: new forms_1.FormControl({}, [forms_1.Validators.required]),
                    columns: new forms_1.FormControl("", [forms_1.Validators.required]),
                    Cols: new forms_1.FormControl(1, [forms_1.Validators.required]),
                    Rows: new forms_1.FormControl(1, [forms_1.Validators.required]),
                    TextColor: new forms_1.FormControl("#000000", [forms_1.Validators.required]),
                    BackgroundColor: new forms_1.FormControl("#ffffff", [forms_1.Validators.required]),
                    Colors: new forms_1.FormGroup({}),
                    Types: new forms_1.FormGroup({}),
                    ColumnMappings: new forms_1.FormArray([]),
                    Flow: new forms_1.FormControl(true),
                    donut: new forms_1.FormGroup({
                        title: new forms_1.FormControl("Default Title")
                    }),
                    booleano: new forms_1.FormGroup({
                        SuccessMessage: new forms_1.FormControl("SuccessMessage"),
                        FailureMessage: new forms_1.FormControl("FailureMessage")
                    })
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    AddDiagramApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    AddDiagramApiModel.Response = Response;
})(AddDiagramApiModel = exports.AddDiagramApiModel || (exports.AddDiagramApiModel = {}));
//# sourceMappingURL=add-diagram-api.model.js.map
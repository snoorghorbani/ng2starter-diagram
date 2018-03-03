"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var store_1 = require("@ngrx/store");
var models_1 = require("../models");
var diagram_configuration_service_1 = require("./diagram-configuration.service");
var DiagramService = /** @class */ (function () {
    function DiagramService(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        // TODO: implement interface of c3 config
        this.charts = {};
    }
    DiagramService.prototype.getDiagrams = function () {
        return this.http.get("http://localhost:3000/api/diagram").map(function (response) { return response; }).catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    DiagramService.prototype.getSources = function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) { return response.Result; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    DiagramService.prototype.getGroups = function () {
        return this.http
            .get("http://localhost:3000/api/diagram/groups")
            .map(function (response) { return response.Result; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    DiagramService.prototype.getDiagram = function (id) {
        debugger;
        if (!id)
            debugger;
        return this.http.get("http://localhost:3000/api/diagram/" + id).map(function (response) { return response; }).catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    DiagramService.prototype.addDiagram = function (data) {
        var model = new models_1.AddDiagramApiModel.Request(data);
        debugger;
        return this.http
            .post("http://localhost:3000/api/diagram", model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    DiagramService.prototype.updateDiagram = function (body) {
        debugger;
        return this.http.put("http://localhost:3000/api/diagram", body).map(function (response) { return response; }).catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    DiagramService.prototype.deleteDiagram = function (id) {
        return this.http.delete("http://localhost:3000/api/diagram/" + id).map(function (response) { return response; }).catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    DiagramService.prototype.getData = function (source, time, once) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (once === void 0) { once = false; }
        if (once && time !== 0) {
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; });
        }
        else if (source.Interval == 0) {
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map(function (res) { return res.Result; });
        }
        else {
            time = time || Date.now();
            return Rx_1.Observable.timer(0, source.Interval).switchMap(function (i) {
                return _this.http
                    .get("http://localhost:3000/api/data", {
                    params: {
                        sourceId: source._id,
                        time: _this.getFloorTime(source.Interval, time).toString()
                    }
                })
                    .map(function (res) { return res.Result; });
            });
        }
    };
    DiagramService.prototype.extract_columns_from_data = function (data, columnsMappings) {
        var res = [];
        columnsMappings.forEach(function (item) {
            var ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            var NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map(function (item, i) { return [item].concat(ValueData[i]); })));
            }
            else {
                return res.push([NameData].concat(ValueData));
            }
        });
        return res;
    };
    DiagramService.prototype.get_data_report = function (data) {
        return _.report(data);
    };
    DiagramService.prototype.get_last_node_of_data = function (data) {
        return _.report(data).filter(function (item) { return item.isLastNode; });
    };
    DiagramService.prototype.buildChartConfig = function (columns) {
        return {
            data: {
                columns: columns
            },
            legend: {
                show: true
            }
        };
    };
    DiagramService.prototype.generateDiagram = function (config, id, route, sync) {
        var _this = this;
        this.charts[id] = c3.generate(__assign({}, config, { bindto: "#diagram_" + id }));
        return this.getData({}, sync).subscribe(function (data) {
            _this.charts[id].load({
                columns: _this.extract_columns_from_data(data.Data, config.ColumnMappings)
            });
        });
    };
    DiagramService.prototype.getFloorTime = function (precision, time) {
        if (precision === void 0) { precision = 60 * 1000; }
        if (time === void 0) { time = 0; }
        return Math.floor((time || Date.now()) / precision);
    };
    DiagramService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DiagramService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: store_1.Store, },
        { type: diagram_configuration_service_1.DiagramConfigurationService, },
    ]; };
    return DiagramService;
}());
exports.DiagramService = DiagramService;
//# sourceMappingURL=diagram.service.js.map
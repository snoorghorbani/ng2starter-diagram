"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ServerConnectingTimeDiagramComponent = /** @class */ (function () {
    function ServerConnectingTimeDiagramComponent(injector) {
        var _this = this;
        this.injector = injector;
        this.time = 0;
        this.dataLoaded = new rxjs_1.BehaviorSubject(false);
        this.data = this.injector.get('data');
        setInterval(function () {
            _this.time = _this.time + 1;
        }, 1000);
    }
    Object.defineProperty(ServerConnectingTimeDiagramComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ServerConnectingTimeDiagramComponent.prototype.ngOnInit = function () { };
    ServerConnectingTimeDiagramComponent.prototype.timeChange = function (e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
        //         .subscribe(data => {
        //                 this.chart.load({
        //                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //                 });
        //         })
    };
    ServerConnectingTimeDiagramComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'diagram-server-connecting-time',
                    template: "<div *ngIf=\"dataLoaded | async\">   <div fxLayoutAlign=\"center center\" class=\"numeric title\">{{data.Description}}</div>   <div fxLayoutAlign=\"center center\" class=\"numeric\">{{time | timeCounter}}</div>   <div [id]=\"'diagram_' + data._id\"></div> </div>",
                    styles: [".numeric {   font-size: 2.4em;   line-height: 1.8; }  .numeric.title {   font-family: iran-sans-bold, Tahoma;   font-size: 1.1em; }"]
                },] },
    ];
    /** @nocollapse */
    ServerConnectingTimeDiagramComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    ServerConnectingTimeDiagramComponent.propDecorators = {
        "time": [{ type: core_1.Input },],
        "data": [{ type: core_1.Input },],
    };
    return ServerConnectingTimeDiagramComponent;
}());
exports.ServerConnectingTimeDiagramComponent = ServerConnectingTimeDiagramComponent;
//# sourceMappingURL=server-connecting-time-diagram.component.js.map
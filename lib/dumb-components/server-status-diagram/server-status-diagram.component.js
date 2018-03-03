"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ServerStatusDiagramComponent = /** @class */ (function () {
    function ServerStatusDiagramComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new rxjs_1.BehaviorSubject(false);
        this.data = this.injector.get('data');
    }
    Object.defineProperty(ServerStatusDiagramComponent.prototype, "data", {
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
    ServerStatusDiagramComponent.prototype.timeChange = function (e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source._id, this.data.Source.Interval)
        //   .subscribe(data => {
        //     debugger
        //     this.chart.load({
        //       columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //     });
        //   })
    };
    ServerStatusDiagramComponent.prototype.ngOnInit = function () { };
    ServerStatusDiagramComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'diagram-server-status',
                    template: "<div *ngIf=\"dataLoaded | async\">   <mat-icon [ngClass]=\"dataStatus$ ? 'connected' : 'disconnected'\">     fiber_manual_record   </mat-icon>   <span *ngIf=\"dataStatus$\">{{data.Widget.booleano.SuccessMessage}}</span>   <span *ngIf=\"!dataStatus$\">{{data.Widget.booleano.FailureMessage}}</span> </div>",
                    styles: [".disconnected {   color: #ba3030; } .connected {   color: #30ae1c; }  .numeric {   font-size: 2.4em;   line-height: 1.8; }  .numeric.title {   font-family: iran-sans-bold, Tahoma;   font-size: 1.1em; }"]
                },] },
    ];
    /** @nocollapse */
    ServerStatusDiagramComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    ServerStatusDiagramComponent.propDecorators = {
        "data": [{ type: core_1.Input },],
    };
    return ServerStatusDiagramComponent;
}());
exports.ServerStatusDiagramComponent = ServerStatusDiagramComponent;
//# sourceMappingURL=server-status-diagram.component.js.map
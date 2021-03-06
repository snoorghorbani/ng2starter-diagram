"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DiagramPartialConfigEditComponent = /** @class */ (function () {
    function DiagramPartialConfigEditComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject_1.BehaviorSubject(false);
        this.formGroup = this.injector.get('formGroup');
        this.diagramService = this.injector.get('diagramService');
    }
    Object.defineProperty(DiagramPartialConfigEditComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            debugger;
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    ;
    DiagramPartialConfigEditComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    DiagramPartialConfigEditComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    DiagramPartialConfigEditComponent.prototype.configChanged = function () { };
    DiagramPartialConfigEditComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'diagram-partial-config-edit',
                    template: "<form [formGroup]=\"formGroup\" fxLayout='column'>   <div>     <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>   </div>   <div>     <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>   </div>   <div>     <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>   </div>   <div>     <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>   </div> </form>",
                    styles: [":host {   width: 100%; }  .diagram-box {   margin: 15px; }  .numeric {   font-size: 3em;   line-height: 1.8;   font-family: iran-sans-bold, Tahoma; } .numeric.title {   font-size: 1.5em; }"]
                },] },
    ];
    /** @nocollapse */
    DiagramPartialConfigEditComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    DiagramPartialConfigEditComponent.propDecorators = {
        "data": [{ type: core_1.Input },],
    };
    return DiagramPartialConfigEditComponent;
}());
exports.DiagramPartialConfigEditComponent = DiagramPartialConfigEditComponent;
//# sourceMappingURL=diagram-partial-config-edit.component.js.map
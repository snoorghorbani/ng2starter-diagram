"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var forms_1 = require("@angular/forms");
var PieDiagramPartialConfigComponent = /** @class */ (function () {
    function PieDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.ConfigChanged = new core_1.EventEmitter();
        this.dataLoaded = new BehaviorSubject_1.BehaviorSubject(false);
        this.formGroup = this.injector.get('formGroup');
        this.diagramService = this.injector.get('diagramService');
        this.donutFormGroup = this.formGroup.controls.donut;
    }
    Object.defineProperty(PieDiagramPartialConfigComponent.prototype, "formGroup", {
        get: function () {
            return this._dataLoaded;
        },
        set: function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    ;
    PieDiagramPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    PieDiagramPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    PieDiagramPartialConfigComponent.prototype.configChanged = function () {
        this.ConfigChanged.emit();
    };
    PieDiagramPartialConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'pie-diagram-partial-config',
                    template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">   <form [formGroup]=\"formGroup\" fxLayout='column'>     <div>       <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>     </div>     <div>       <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>     </div>     <div>       <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>     </div>     <div>       <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>     </div>   </form>   <form [formGroup]=\"donutFormGroup\">     <mat-form-field>       <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">     </mat-form-field>   </form> </div>",
                    styles: [":host {   width: 100%; }  .diagram-box {   margin: 15px; }  .numeric {   font-size: 3em;   line-height: 1.8;   font-family: iran-sans-bold, Tahoma; } .numeric.title {   font-size: 1.5em; }"]
                },] },
    ];
    /** @nocollapse */
    PieDiagramPartialConfigComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    PieDiagramPartialConfigComponent.propDecorators = {
        "ConfigChanged": [{ type: core_1.Output },],
        "formGroup": [{ type: core_1.Input },],
    };
    return PieDiagramPartialConfigComponent;
}());
exports.PieDiagramPartialConfigComponent = PieDiagramPartialConfigComponent;
//# sourceMappingURL=pie-diagram-partial-config.component.js.map
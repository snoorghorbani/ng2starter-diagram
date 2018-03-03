"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var forms_1 = require("@angular/forms");
var BooleanoWidgetPartialConfigComponent = /** @class */ (function () {
    function BooleanoWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject_1.BehaviorSubject(false);
        this.formGroup = this.injector.get('formGroup');
        this.diagramService = this.injector.get('diagramService');
        this.booleanoFormGroup = this.formGroup.controls.booleano;
    }
    Object.defineProperty(BooleanoWidgetPartialConfigComponent.prototype, "formGroup", {
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
    BooleanoWidgetPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    BooleanoWidgetPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    BooleanoWidgetPartialConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'booleano-widget-partial-config',
                    template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">   <form [formGroup]=\"booleanoFormGroup\">     <mat-form-field>       <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"SuccessMessage\">     </mat-form-field>     <mat-form-field>       <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"FailureMessage\">     </mat-form-field>   </form> </div>",
                    styles: [":host {   width: 100%; }  .diagram-box {   margin: 15px; }  .numeric {   font-size: 3em;   line-height: 1.8;   font-family: iran-sans-bold, Tahoma; } .numeric.title {   font-size: 1.5em; }"]
                },] },
    ];
    /** @nocollapse */
    BooleanoWidgetPartialConfigComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    BooleanoWidgetPartialConfigComponent.propDecorators = {
        "formGroup": [{ type: core_1.Input },],
    };
    return BooleanoWidgetPartialConfigComponent;
}());
exports.BooleanoWidgetPartialConfigComponent = BooleanoWidgetPartialConfigComponent;
//# sourceMappingURL=booleano-widget-partial-config.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var forms_1 = require("@angular/forms");
var NumericWidgetPartialConfigComponent = /** @class */ (function () {
    function NumericWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject_1.BehaviorSubject(false);
        this.formGroup = this.injector.get('formGroup');
        this.diagramService = this.injector.get('diagramService');
        this.donutFormGroup = this.formGroup.controls.donut;
    }
    Object.defineProperty(NumericWidgetPartialConfigComponent.prototype, "formGroup", {
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
    NumericWidgetPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    NumericWidgetPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    NumericWidgetPartialConfigComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'numeric-widget-partial-config',
                    template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">   <form [formGroup]=\"donutFormGroup\">     <mat-form-field>       <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">     </mat-form-field>     <mat-form-field>       <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">     </mat-form-field>   </form> </div>",
                    styles: [":host {   width: 100%; }  .diagram-box {   margin: 15px; }  .numeric {   font-size: 3em;   line-height: 1.8;   font-family: iran-sans-bold, Tahoma; } .numeric.title {   font-size: 1.5em; }"]
                },] },
    ];
    /** @nocollapse */
    NumericWidgetPartialConfigComponent.ctorParameters = function () { return [
        { type: core_1.Injector, },
    ]; };
    NumericWidgetPartialConfigComponent.propDecorators = {
        "formGroup": [{ type: core_1.Input },],
    };
    return NumericWidgetPartialConfigComponent;
}());
exports.NumericWidgetPartialConfigComponent = NumericWidgetPartialConfigComponent;
//# sourceMappingURL=numeric-widget-partial-config.component.js.map
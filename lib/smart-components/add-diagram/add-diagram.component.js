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
var forms_1 = require("@angular/forms");
var Observable_1 = require("rxjs/Observable");
var store_1 = require("@ngrx/store");
var router_1 = require("@angular/router");
var services_1 = require("../../services");
var models_1 = require("../../models");
var actions_1 = require("../../actions");
var AddDiagramComponent = /** @class */ (function () {
    function AddDiagramComponent(diagramService, formBuilder, store, route) {
        var _this = this;
        this.diagramService = diagramService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.route = route;
        this.formGroup = models_1.AddDiagramApiModel.Request.formGroup;
        this.sources = this.diagramService.getSources();
        this.groups = this.diagramService.getGroups();
        // this.diagramModel = new DiagramModel();
        this.columnsMappings = this.formGroup.controls.ColumnMappings.controls;
        this.route.params.subscribe(function (params) {
            var diagramId = params["id"];
            diagramId &&
                _this.diagramService.getDiagram(diagramId).subscribe(function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Name: data.Name,
                        IsActive: data.IsActive,
                        Groups: data.Groups,
                        Type: data.Chart.data.type,
                        Legend: data.Chart.legend.show,
                        Subchart: data.Chart.subchart.show,
                        Zoom: data.Chart.zoom.enabled,
                        Tooltip: data.Chart.tooltip.grouped,
                        Sync: data.Source.Interval,
                        Source: data.Source,
                        columns: data.Chart.data.columns,
                        ColumnMappings: data.Chart.ColumnMappings,
                        Cols: data.Box.Cols,
                        Flow: data.Chart.Flow,
                        Rows: data.Box.Rows,
                        BackgroundColor: data.Box.BackgroundColor,
                        TextColor: data.Box.TextColor
                    });
                    var colorsControl = _this.formGroup.controls["Colors"];
                    Object.keys(data.Chart.data.colors || {}).forEach(function (columnKey) {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new forms_1.FormControl(data.Chart.data.colors[columnKey]));
                    });
                    var typesControl = _this.formGroup.controls["Types"];
                    Object.keys(data.Chart.data.types || {}).forEach(function (key) {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new forms_1.FormControl(data.Chart.data.types[key]));
                    });
                    debugger;
                    data.Chart.ColumnMappings.forEach(function (mapping) { return _this.addColumn(mapping.NamePath, mapping.ValuePath); });
                    _this.source = data.Source;
                    _this.store.dispatch(new actions_1.HaveEndpointAction(_this));
                    _this.diagramPartialConfig = {
                        type: _this.formGroup.value.Type,
                        inputs: {
                            formGroup: _this.formGroup,
                            diagramService: _this.diagramService
                        }
                    };
                });
            _this.diagramPartialConfig = {
                type: _this.formGroup.value.Type,
                inputs: {
                    formGroup: _this.formGroup,
                    diagramService: _this.diagramService
                }
            };
        });
        this.diagramTypes = [
            "bar",
            "donut",
            "pie",
            "scatter",
            "line",
            "area",
            "area-spline",
            "numero",
            "booleano",
            "tempo"
        ];
    }
    AddDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup.controls.ColumnMappings.statusChanges.subscribe(function (status) {
            if (status == "VALID" &&
                _this.formGroup.controls.ColumnMappings.controls.length > 0 &&
                _this.data)
                _this.store.dispatch(new actions_1.ColumnsMappingChangedAction(_this));
        });
    };
    AddDiagramComponent.prototype.ngOnDestroy = function () {
        if (this.dataSubscription)
            this.dataSubscription.unsubscribe();
    };
    // getData() {
    //   const o$ = this.diagramService.getData(this.source);
    //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
    //   return o$;
    // }
    // getData() {
    //   const o$ = this.diagramService.getData(this.source);
    //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
    //   return o$;
    // }
    AddDiagramComponent.prototype.getDataStructure = 
    // getData() {
    //   const o$ = this.diagramService.getData(this.source);
    //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
    //   return o$;
    // }
    function () {
        var _this = this;
        var observer = this.diagramService.getData(__assign({}, this.source, { Interval: 0 }), Date.now() - 10000);
        this.dataSubscription = observer.subscribe(function (data) {
            _this.data = data.Data;
            _this.pathOptions = _this.diagramService.get_data_report(data.Data);
        });
        return observer;
    };
    AddDiagramComponent.prototype.configChanged = function () {
        this.store.dispatch(new actions_1.DiagramConfigChangedAction(this));
    };
    AddDiagramComponent.prototype.typeChanged = function () {
        debugger;
        var typesFormGroup = this.formGroup.controls.Types.controls;
        for (var cb in typesFormGroup) {
            debugger;
            typesFormGroup[cb].setValue(this.formGroup.value.Type);
        }
        this.diagramPartialConfig = {
            type: this.formGroup.value.Type,
            inputs: {
                formGroup: this.formGroup,
                diagramService: this.diagramService
            }
        };
        this.store.dispatch(new actions_1.DiagramConfigChangedAction(this));
    };
    AddDiagramComponent.prototype.addColumn = function (NamePath, ValuePath) {
        if (NamePath === void 0) { NamePath = ""; }
        if (ValuePath === void 0) { ValuePath = ""; }
        var control = this.formGroup.controls["ColumnMappings"];
        control.push(this.formBuilder.group({
            NamePath: [NamePath],
            ValuePath: [ValuePath, forms_1.Validators.required]
        }));
    };
    AddDiagramComponent.prototype.routeEntered = function (event) {
        this.source = event.value;
        this.formGroup.patchValue({ Source: event.value });
        this.store.dispatch(new actions_1.HaveEndpointAction(this));
    };
    AddDiagramComponent.prototype.removeColumn = function (i) {
        var control = this.formGroup.controls["ColumnMappings"];
        control.removeAt(i);
    };
    AddDiagramComponent.prototype.calculateColumns = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obser) {
            var columnsMApping = {};
            var columns = _this.diagramService.extract_columns_from_data(_this.data, _this.formGroup.controls.ColumnMappings.value);
            _this.formGroup.controls.columns.setValue(columns);
            //add new item to this.formGroup.controls.colors form control
            var colorsControl = _this.formGroup.controls["Colors"];
            columns.forEach(function (column) {
                var columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new forms_1.FormControl("#123456"));
            });
            var typesControl = _this.formGroup.controls["Types"];
            columns.forEach(function (column) {
                var key = column[0];
                if (!(key in typesControl.controls))
                    typesControl.addControl(key, new forms_1.FormControl(_this.formGroup.value.Type));
            });
            obser.next();
        });
    };
    AddDiagramComponent.prototype.generateDiagram = function () {
        var temp = new models_1.DiagramModel();
        temp._id = "template_id";
        temp.Name = this.formGroup.value.Name;
        temp.Source = this.source;
        temp.Box = {
            NumberOfColumns: 1,
            Order: 1,
            BackgroundColor: this.formGroup.value.BackgroundColor
        };
        temp.Widget = {
            booleano: this.formGroup.value.booleano
        };
        temp.Chart = {
            ColumnMappings: this.formGroup.value.ColumnMappings,
            data: {
                columns: this.formGroup.controls.columns.value,
                type: this.formGroup.value.Type,
                types: this.formGroup.value.Types,
                colors: this.formGroup.controls.Colors.value
            },
            Flow: this.formGroup.value.Flow,
            legend: {
                show: this.formGroup.value.Legend
            },
            subchart: {
                show: this.formGroup.value.Subchart
            },
            zoom: {
                enabled: this.formGroup.value.Zoom
            },
            tooltip: {
                grouped: this.formGroup.value.Tooltip
            }
        };
        // this.componentModel = {
        //   component: this.typeMapToDiagram[temp.Chart.data.type],
        //   inputs: { data: temp }
        // }
        this.diagramModel = temp;
        return Observable_1.Observable.empty();
    };
    AddDiagramComponent.prototype.add = function (event) {
        this.store.dispatch(new actions_1.AddDiagramAction(this.formGroup.value));
    };
    AddDiagramComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "diagram-add",
                    template: "<div fxLayout=\"column\" fxFlex=\"100\">   <div fxLayout=\"row\" fxLayout.lt-md=\"column\">     <mat-card fxFlex=\"60\">       <form [formGroup]=\"formGroup\" fxLayout='column'>         <mat-card-header>           <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>         </mat-card-header>         <mat-card-content>           <mat-form-field>             <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">           </mat-form-field>           <mat-form-field fxFlexFill>             <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (change)=\"routeEntered($event)\">               <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">                 {{item.Endpoint}}               </mat-option>             </mat-select>           </mat-form-field>           <mat-form-field fxFlexFill>             <input matInput placeholder=\"sync time\" formControlName=\"Sync\">           </mat-form-field>           <div>             <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>               <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>               <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">                 {{item}}               </mat-radio-button>             </mat-radio-group>           </div>           <mat-form-field>             <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>               <mat-select-trigger>                 {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}                 <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">                   (+{{formGroup.controls.Groups.value.length - 1}} others)                 </span>               </mat-select-trigger>               <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>             </mat-select>           </mat-form-field>           <div>             <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>           </div>           <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>         </mat-card-content>       </form>     </mat-card>     <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>   </div>    <div fxLayout=\"row\" fxLayout.lt-md=\"column\">     <mat-card fxFlex=\"25\">       <mat-card-header>         <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>       </mat-card-header>       <mat-card-content>         <div class=\"item-margin\">           <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>         </div>       </mat-card-content>     </mat-card>      <mat-card fxLayout=\"column\" fxFlex=\"25\">       <mat-card-header>         <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>       </mat-card-header>       <mat-card-content>         <div fxLayout=\"column\" fxLayoutGap=\"5px\">           <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">             <div fxLayout=\"column\">               <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">                 <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">                   <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">                     <mat-option>--</mat-option>                     <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">                       <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->                       {{item.path}}                     </mat-option>                   </mat-select>                 </mat-form-field>                 <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">                   <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">                     <mat-option>--</mat-option>                     <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->                     <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">                       {{item.path}}                     </mat-option>                   </mat-select>                 </mat-form-field>                 <button (click)=\"removeColumn(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>               </div>               <br />             </div>           </div>         </div>         <div>           <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>         </div>       </mat-card-content>     </mat-card>     <mat-card fxFlex=\"25\">       <mat-card-header>         <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>       </mat-card-header>       <mat-card-content>         <div class=\"item-margin\">           <div class=\"list-item\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\" fxLayoutAlign=\"space-between center\">             <span>{{item[0]}} : {{item[1]}}</span>             <span [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">               <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">             </span>             <mat-form-field [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">               <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->               <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">                 <mat-option>--</mat-option>                 <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">                   {{item}}                 </mat-option>               </mat-select>             </mat-form-field>           </div>         </div>       </mat-card-content>     </mat-card>     <mat-card fxLayout=\"column\" fxFlex=\"25\">       <mat-card-header>         <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>       </mat-card-header>       <mat-card-content [formGroup]=\"formGroup\">         <mat-form-field>           <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">         </mat-form-field>         <mat-form-field>           <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">         </mat-form-field>         <div>           <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>           <span>             <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">           </span>         </div>         <div>           <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>           <span>             <input formControlName=\"BackgroundColor\" type=\"color\">           </span>         </div>       </mat-card-content>     </mat-card>   </div>   <div>     <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">       <mat-card-content>         <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>         <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>       </mat-card-content>     </mat-card>   </div> </div>",
                    styles: ["#chart{     width: 300px;     direction: ltr; }  .form-element-margin {   margin: 5px 10px; } .item-margin {   margin: 10px 0;   display: block; }  mat-option.depth_2 {   padding-right: 30px; } mat-option.depth_3 {   padding-right: 50px; } mat-option.depth_4 {   padding-right: 70px; } .mat-card{   margin:12.5px; }"]
                },] },
    ];
    /** @nocollapse */
    AddDiagramComponent.ctorParameters = function () { return [
        { type: services_1.DiagramService, },
        { type: forms_1.FormBuilder, },
        { type: store_1.Store, },
        { type: router_1.ActivatedRoute, },
    ]; };
    return AddDiagramComponent;
}());
exports.AddDiagramComponent = AddDiagramComponent;
//# sourceMappingURL=add-diagram.component.js.map
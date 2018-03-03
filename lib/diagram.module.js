"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var flex_layout_1 = require("@angular/flex-layout");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var diagram_routing_module_1 = require("./diagram-routing.module");
var diagram_config_1 = require("./diagram.config");
var infra_1 = require("@soushians/infra");
var smart_components_1 = require("./smart-components");
var dumb_components_1 = require("./dumb-components");
var services_1 = require("./services");
var reducers_1 = require("./reducers");
var effects_2 = require("./effects");
debugger;
var NgsDiagramModule = /** @class */ (function () {
    function NgsDiagramModule() {
    }
    NgsDiagramModule.forRoot = function (config) {
        return {
            ngModule: RootNgsDiagramModule,
            providers: [
                { provide: diagram_config_1.MODULE_CONFIG_TOKEN, useValue: config },
                services_1.DiagramConfigurationService,
                services_1.DiagramService
            ]
        };
    };
    NgsDiagramModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        http_1.HttpClientModule,
                        infra_1.InfraModule,
                        forms_1.FormsModule,
                        router_1.RouterModule,
                        common_1.CommonModule,
                        material_1.MatExpansionModule,
                        material_1.MatSnackBarModule,
                        material_1.MatIconModule,
                        material_1.MatButtonModule,
                        material_1.MatCardModule,
                        material_1.MatSelectModule,
                        material_1.MatSliderModule,
                        material_1.MatInputModule,
                        material_1.MatCheckboxModule,
                        material_1.MatFormFieldModule,
                        material_1.MatTabsModule,
                        flex_layout_1.FlexLayoutModule,
                        material_1.MatRadioModule,
                        material_1.MatTooltipModule,
                        material_1.MatGridListModule,
                        material_1.MatAutocompleteModule,
                        forms_1.ReactiveFormsModule,
                        animations_1.BrowserAnimationsModule
                    ],
                    declarations: [
                        smart_components_1.DiagramModuleContainerComponent,
                        smart_components_1.DiagramsComponent,
                        smart_components_1.AddDiagramComponent,
                        smart_components_1.EditDiagramComponent,
                        smart_components_1.DataMapperComponent,
                        smart_components_1.DiagramComponent,
                        dumb_components_1.NumericDiagramComponent,
                        dumb_components_1.ServerStatusDiagramComponent,
                        dumb_components_1.DiagramPartialConfigEditComponent,
                        smart_components_1.DynamicConfigComponentSelectorComponent,
                        dumb_components_1.PieDiagramPartialConfigComponent,
                        dumb_components_1.BooleanoWidgetPartialConfigComponent,
                        dumb_components_1.NumericWidgetPartialConfigComponent,
                        dumb_components_1.ServerConnectingTimeDiagramComponent,
                        smart_components_1.DynamicComponentSelectorComponent,
                        dumb_components_1.NumericEditDiagramComponent,
                        dumb_components_1.LinearDiagramPartialConfigComponent,
                        smart_components_1.diagramViewComponent
                    ],
                    providers: [],
                    exports: [smart_components_1.DataMapperComponent, smart_components_1.diagramViewComponent]
                },] },
    ];
    /** @nocollapse */
    NgsDiagramModule.ctorParameters = function () { return []; };
    return NgsDiagramModule;
}());
exports.NgsDiagramModule = NgsDiagramModule;
var RootNgsDiagramModule = /** @class */ (function () {
    function RootNgsDiagramModule() {
    }
    RootNgsDiagramModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        NgsDiagramModule,
                        store_1.StoreModule.forFeature("diagram", reducers_1.DiagramReducers),
                        effects_1.EffectsModule.forFeature([effects_2.DiagramEffects, effects_2.AddDiagramEffects]),
                        diagram_routing_module_1.RoutingModule
                    ],
                    exports: [smart_components_1.diagramViewComponent]
                },] },
    ];
    /** @nocollapse */
    RootNgsDiagramModule.ctorParameters = function () { return []; };
    return RootNgsDiagramModule;
}());
exports.RootNgsDiagramModule = RootNgsDiagramModule;
//# sourceMappingURL=diagram.module.js.map
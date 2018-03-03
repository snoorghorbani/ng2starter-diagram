import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatExpansionModule,
	MatSnackBarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatTooltipModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule,
	MatCheckboxModule,
	MatGridListModule,
	MatSliderModule,
	MatAutocompleteModule
} from "@angular/material";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";
import { AuthenticationModule } from "@soushians/authentication";

import { RoutingModule } from "./diagram-routing.module";
import { DiagramModuleConfig, MODULE_CONFIG_TOKEN } from "./diagram.config";
import { InfraModule } from "@soushians/infra";
import {
	DiagramModuleContainerComponent,
	DiagramsComponent,
	AddDiagramComponent,
	EditDiagramComponent,
	DataMapperComponent,
	DiagramComponent,
	DynamicComponentSelectorComponent,
	DynamicConfigComponentSelectorComponent,
	diagramViewComponent
} from "./smart-components";
import {
	NumericEditDiagramComponent,
	DiagramPartialConfigEditComponent,
	PieDiagramPartialConfigComponent,
	BooleanoWidgetPartialConfigComponent,
	LinearDiagramPartialConfigComponent,
	NumericDiagramComponent,
	ServerStatusDiagramComponent,
	ServerConnectingTimeDiagramComponent,
	NumericWidgetPartialConfigComponent
} from "./dumb-components";
import { DiagramService, DiagramConfigurationService } from "./services";
import { DiagramReducers } from "./reducers";
import { DiagramEffects, AddDiagramEffects } from "./effects";

@NgModule({
	imports: [
		HttpClientModule,
		InfraModule,
		FormsModule,
		RouterModule,
		CommonModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSelectModule,
		MatSliderModule,
		MatInputModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatTabsModule,
		FlexLayoutModule,
		MatRadioModule,
		MatTooltipModule,
		MatGridListModule,
		MatAutocompleteModule,
		ReactiveFormsModule,
		AuthenticationModule,
		BrowserAnimationsModule
	],
	declarations: [
		DiagramModuleContainerComponent,
		DiagramsComponent,
		AddDiagramComponent,
		EditDiagramComponent,
		DataMapperComponent,
		DiagramComponent,
		NumericDiagramComponent,
		ServerStatusDiagramComponent,
		DiagramPartialConfigEditComponent,
		DynamicConfigComponentSelectorComponent,
		PieDiagramPartialConfigComponent,
		BooleanoWidgetPartialConfigComponent,
		NumericWidgetPartialConfigComponent,
		ServerConnectingTimeDiagramComponent,
		DynamicComponentSelectorComponent,
		NumericEditDiagramComponent,
		LinearDiagramPartialConfigComponent,
		diagramViewComponent
	],
	providers: [],
	exports: [DataMapperComponent, diagramViewComponent]
})
export class DiagramModule {
	static forRoot(config?: DiagramModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootDiagramModule,
			providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, DiagramConfigurationService, DiagramService]
		};
	}
}

@NgModule({
	imports: [
		DiagramModule,
		StoreModule.forFeature("diagram", DiagramReducers),
		EffectsModule.forFeature([DiagramEffects, AddDiagramEffects]),
		RoutingModule
	],
	exports: [diagramViewComponent]
})
export class RootDiagramModule { }

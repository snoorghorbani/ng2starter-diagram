﻿import {
	Component,
	OnInit,
	Input,
	AfterViewInit,
	ComponentFactoryResolver,
	ViewChild,
	ViewContainerRef,
	ReflectiveInjector,
	OnDestroy,
	Output,
	EventEmitter
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { DiagramModel } from "../../models";
import { Subscription } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { SocketService } from "@soushians/infra";

import { DiagramService } from "../../services";
import { DiagramPartialConfigEditComponent } from "../../dumb-components/diagram-partial-config-edit";
import { PieDiagramPartialConfigComponent } from "../../dumb-components/pie-diagram-partial-config";
import { BooleanoWidgetPartialConfigComponent } from "../../dumb-components/booleano-widget-partial-config";
import { LinearDiagramPartialConfigComponent } from "../../dumb-components";

declare var c3: any;

@Component({
	selector: "dynamic-config-component-selector",
	templateUrl: "./dynamic-config-component-selector.component.html",
	styleUrls: ["./dynamic-config-component-selector.component.scss"],
	entryComponents: [
		DiagramPartialConfigEditComponent,
		PieDiagramPartialConfigComponent,
		LinearDiagramPartialConfigComponent,
		BooleanoWidgetPartialConfigComponent
	]
})
export class DynamicConfigComponentSelectorComponent implements AfterViewInit {
	typeMapToDiagram = {
		bar: DiagramPartialConfigEditComponent,
		area: LinearDiagramPartialConfigComponent,
		"area-spline": LinearDiagramPartialConfigComponent,
		donut: DiagramPartialConfigEditComponent,
		pie: PieDiagramPartialConfigComponent,
		scatter: DiagramPartialConfigEditComponent,
		line: LinearDiagramPartialConfigComponent,
		booleano: BooleanoWidgetPartialConfigComponent
	};
	@ViewChild("dynamicComponentContainer", { read: ViewContainerRef })
	dynamicComponentContainer: ViewContainerRef;
	@Output() ConfigChanged = new EventEmitter();
	currentComponent: any = null;
	@Input()
	set data(data: any) {
		if (!data || Object.keys(data).length == 0) return;
		if (!(data.type in this.typeMapToDiagram)) {
			if (this.currentComponent) this.currentComponent.destroy();
			return;
		}
		let _component = this.typeMapToDiagram[data.type];
		let inputProviders = Object.keys(data.inputs).map((inputName) => {
			return { provide: inputName, useValue: data.inputs[inputName] };
		});
		let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

		let injector = ReflectiveInjector.fromResolvedProviders(
			resolvedInputs,
			this.dynamicComponentContainer.parentInjector
		);
		let factory = this.resolver.resolveComponentFactory(_component);
		debugger;
		let component = factory.create(injector);
		if ((<any>component.instance).ConfigChanged)
			(<any>component.instance).ConfigChanged.subscribe(() => {
				debugger;
				this.ConfigChanged.emit();
			});

		this.dynamicComponentContainer.insert(component.hostView);

		if (this.currentComponent) {
			this.currentComponent.destroy();
		}

		this.currentComponent = component;
	}
	constructor(private resolver: ComponentFactoryResolver) { }
	ngAfterViewInit() { }
}

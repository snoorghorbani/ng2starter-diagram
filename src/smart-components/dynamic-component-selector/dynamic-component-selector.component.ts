import {
	Component,
	OnInit,
	Input,
	AfterViewInit,
	ComponentFactoryResolver,
	ViewChild,
	ViewContainerRef,
	ReflectiveInjector,
	OnDestroy
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { DiagramModel } from "../../models";
import { Subscription } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { SocketService } from "@soushians/infra";

import { DiagramService } from "../../services";
import { NumericDiagramComponent } from "../../dumb-components/numeric-diagram";
import { ServerStatusDiagramComponent } from "../../dumb-components/server-status-diagram";
import { ServerConnectingTimeDiagramComponent } from "../../dumb-components/server-connecting-time-diagram";
import { DiagramComponent } from "../../smart-components/diagram";

declare var c3: any;

@Component({
	selector: "dynamic-component-selector",
	templateUrl: "./dynamic-component-selector.component.html",
	styleUrls: ["./dynamic-component-selector.component.scss"],
	// entryComponents: [DiagramComponent, NumericDiagramComponent]
	entryComponents: [
		NumericDiagramComponent,
		ServerConnectingTimeDiagramComponent,
		ServerStatusDiagramComponent,
		DiagramComponent
	]
})
export class DynamicComponentSelectorComponent implements AfterViewInit {
	typeMapToDiagram = {
		bar: DiagramComponent,
		donut: DiagramComponent,
		pie: DiagramComponent,
		scatter: DiagramComponent,
		line: DiagramComponent,
		area: DiagramComponent,
		"area-spline": DiagramComponent,
		numero: NumericDiagramComponent,
		booleano: ServerStatusDiagramComponent,
		tempo: ServerConnectingTimeDiagramComponent
	};
	@ViewChild("dynamicComponentContainer", { read: ViewContainerRef })
	dynamicComponentContainer: ViewContainerRef;
	@ViewChild(DiagramComponent) widgetComponent: DiagramComponent;
	currentComponent: any = null;
	_data: any;
	@Input()
	set data(data: any) {
		if (!data || Object.keys(data).length == 0) return;
		this.backgroundColor = data.Box.BackgroundColor;
		this._data = data;
		let raw = { data };
		let _component = this.typeMapToDiagram[data.Chart.data.type];
		let inputProviders = Object.keys(raw).map((inputName) => {
			return { provide: inputName, useValue: raw[inputName] };
		});
		let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

		let injector = ReflectiveInjector.fromResolvedProviders(
			resolvedInputs,
			this.dynamicComponentContainer.parentInjector
		);
		let factory = this.resolver.resolveComponentFactory(_component);

		let component = factory.create(injector);

		this.dynamicComponentContainer.insert(component.hostView);

		if (this.currentComponent) {
			this.currentComponent.destroy();
		}

		this.currentComponent = component;
	}
	backgroundColor: String = "";
	constructor(private resolver: ComponentFactoryResolver) { }
	ngAfterViewInit() { }
	timeChange(e) {
		this.currentComponent._component.timeChange(e);
	}
}

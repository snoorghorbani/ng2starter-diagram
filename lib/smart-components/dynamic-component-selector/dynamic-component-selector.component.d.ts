import { AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { NumericDiagramComponent } from "../../dumb-components/numeric-diagram";
import { ServerStatusDiagramComponent } from "../../dumb-components/server-status-diagram";
import { ServerConnectingTimeDiagramComponent } from "../../dumb-components/server-connecting-time-diagram";
import { DiagramComponent } from "../../smart-components/diagram";
export declare class DynamicComponentSelectorComponent implements AfterViewInit {
    private resolver;
    typeMapToDiagram: {
        bar: typeof DiagramComponent;
        donut: typeof DiagramComponent;
        pie: typeof DiagramComponent;
        scatter: typeof DiagramComponent;
        line: typeof DiagramComponent;
        area: typeof DiagramComponent;
        "area-spline": typeof DiagramComponent;
        numero: typeof NumericDiagramComponent;
        booleano: typeof ServerStatusDiagramComponent;
        tempo: typeof ServerConnectingTimeDiagramComponent;
    };
    dynamicComponentContainer: ViewContainerRef;
    widgetComponent: DiagramComponent;
    currentComponent: any;
    _data: any;
    data: any;
    backgroundColor: String;
    constructor(resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    timeChange(e: any): void;
}

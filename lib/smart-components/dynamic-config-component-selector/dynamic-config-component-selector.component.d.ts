import { AfterViewInit, ComponentFactoryResolver, ViewContainerRef, EventEmitter } from "@angular/core";
import { DiagramPartialConfigEditComponent } from "../../dumb-components/diagram-partial-config-edit";
import { PieDiagramPartialConfigComponent } from "../../dumb-components/pie-diagram-partial-config";
import { BooleanoWidgetPartialConfigComponent } from "../../dumb-components/booleano-widget-partial-config";
import { LinearDiagramPartialConfigComponent } from "../../dumb-components";
export declare class DynamicConfigComponentSelectorComponent implements AfterViewInit {
    private resolver;
    typeMapToDiagram: {
        bar: typeof DiagramPartialConfigEditComponent;
        area: typeof LinearDiagramPartialConfigComponent;
        "area-spline": typeof LinearDiagramPartialConfigComponent;
        donut: typeof DiagramPartialConfigEditComponent;
        pie: typeof PieDiagramPartialConfigComponent;
        scatter: typeof DiagramPartialConfigEditComponent;
        line: typeof LinearDiagramPartialConfigComponent;
        booleano: typeof BooleanoWidgetPartialConfigComponent;
    };
    dynamicComponentContainer: ViewContainerRef;
    ConfigChanged: EventEmitter<{}>;
    currentComponent: any;
    data: any;
    constructor(resolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
}

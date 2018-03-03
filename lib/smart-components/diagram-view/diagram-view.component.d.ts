import { OnInit } from "@angular/core";
import { DiagramService } from "../../services";
import { Observable } from "rxjs/Observable";
import { GetDiagramsApiModel } from "../../models";
export declare class diagramViewComponent implements OnInit {
    private diagramService;
    diagrams: Observable<GetDiagramsApiModel.Response>;
    width: number;
    diagramData$: any;
    diagramId: string;
    constructor(diagramService: DiagramService);
    ngOnInit(): void;
}

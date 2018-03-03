import { OnInit } from "@angular/core";
import { DiagramService } from "../../services";
import { Observable } from "rxjs/Observable";
import { GetDiagramsApiModel } from "../../models";
export declare class DiagramsComponent implements OnInit {
    private diagramService;
    diagrams: Observable<GetDiagramsApiModel.Response>;
    width: number;
    constructor(diagramService: DiagramService);
    ngOnInit(): void;
}

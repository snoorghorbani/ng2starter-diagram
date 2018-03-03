import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { AddDiagramActionStart, AddDiagramActionSucceed, AddDiagramActionFailed, GenerateDiagramAction, StructureDefinitionStartAction, DataLoadedAction } from "../actions";
import { DiagramService } from "../services";
export declare class AddDiagramEffects {
    private actions$;
    private router;
    private diagramService;
    constructor(actions$: Actions<any>, router: Router, diagramService: DiagramService);
    addDiagramRequest$: Observable<AddDiagramActionStart>;
    addDiagram$: Observable<AddDiagramActionSucceed | AddDiagramActionFailed>;
    ADD_DIAGRAM_SUCCEED$: Observable<Observable<{}>>;
    HAVE_ENDPOINT$: Observable<DataLoadedAction>;
    DATA_LOADED$: Observable<StructureDefinitionStartAction>;
    DIAGRAM_CONFIG_CHANGED$: Observable<GenerateDiagramAction>;
    STRUCTURE_DEFINITION_START$: Observable<{}>;
    COLUMNS_MAPPING_CHANGED$: Observable<{}>;
    STRUCTURE_DEFINITION_END$: Observable<{}>;
    GenerateDiagram$: Observable<any>;
}

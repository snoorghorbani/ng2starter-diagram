import { ActivatedRoute } from "@angular/router";
import { OnInit } from "@angular/core";
import { DiagramService } from "../../services";
import { Store } from "@ngrx/store";
import { FormGroup } from "@angular/forms";
import * as FeatureReducer from "../../reducers";
export declare class EditDiagramComponent implements OnInit {
    private diagramService;
    private route;
    private store;
    formGroup: FormGroup;
    constructor(diagramService: DiagramService, route: ActivatedRoute, store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
    add(event: any): void;
}

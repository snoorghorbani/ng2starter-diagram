import { OnInit } from "@angular/core";
import { DiagramService } from "../../services";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../reducers";
export declare class DataMapperComponent implements OnInit {
    private diagramService;
    private store;
    destination: string;
    _data: any;
    data: any;
    dataReport: any[];
    constructor(diagramService: DiagramService, store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
}

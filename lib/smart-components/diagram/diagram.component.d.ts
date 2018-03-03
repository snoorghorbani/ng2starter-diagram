import { AfterViewInit, OnDestroy, Injector } from "@angular/core";
import { DiagramService } from "../../services";
import { DiagramModel } from "../../models";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../../reducers";
import { MatSliderChange } from "@angular/material";
import { ActivatedRoute } from "@angular/router";
export declare class DiagramComponent implements AfterViewInit, OnDestroy {
    private store;
    private diagramService;
    private http;
    private injector;
    private route;
    modelIsCorrect: BehaviorSubject<boolean>;
    _model: DiagramModel;
    data: DiagramModel;
    dataSubscribtion: Subscription;
    chart: any;
    time: number;
    now: number;
    constructor(store: Store<FeatureReducer.FeatureState>, diagramService: DiagramService, http: HttpClient, injector: Injector, route: ActivatedRoute);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    timeChange(e: MatSliderChange): void;
}

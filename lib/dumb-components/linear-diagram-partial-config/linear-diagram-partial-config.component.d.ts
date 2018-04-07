import { OnInit, EventEmitter, Injector, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { DiagramService } from "../../services";
import { Subscription } from "rxjs";
import { FormGroup } from "@angular/forms";
export declare class LinearDiagramPartialConfigComponent implements OnInit, OnDestroy {
    private injector;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _data: any;
    data: any;
    ConfigChanged: EventEmitter<{}>;
    diagramService: DiagramService;
    formGroup: FormGroup;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    configChanged(): void;
}

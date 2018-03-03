import { OnInit, EventEmitter, Injector, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DiagramService } from '../../services';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
export declare class PieDiagramPartialConfigComponent implements OnInit, OnDestroy {
    private injector;
    ConfigChanged: EventEmitter<{}>;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _dataLoaded: any;
    formGroup: FormGroup;
    donutFormGroup: FormGroup;
    diagramService: DiagramService;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    configChanged(): void;
}

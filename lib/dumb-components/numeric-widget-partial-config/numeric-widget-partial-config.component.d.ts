import { OnInit, Injector, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DiagramService } from '../../services';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
export declare class NumericWidgetPartialConfigComponent implements OnInit, OnDestroy {
    private injector;
    dataSubscribtion: Subscription;
    dataLoaded: BehaviorSubject<boolean>;
    _dataLoaded: any;
    formGroup: FormGroup;
    donutFormGroup: FormGroup;
    diagramService: DiagramService;
    constructor(injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

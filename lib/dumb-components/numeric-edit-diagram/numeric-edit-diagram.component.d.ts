import { OnInit, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DiagramService } from '../../services';
export declare class NumericEditDiagramComponent implements OnInit {
    private injector;
    private diagramService;
    dataLoaded: BehaviorSubject<boolean>;
    _data: any;
    data: any;
    constructor(injector: Injector, diagramService: DiagramService);
    ngOnInit(): void;
}

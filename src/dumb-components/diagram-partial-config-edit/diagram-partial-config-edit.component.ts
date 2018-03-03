import { Component, OnInit, Input, Output, EventEmitter, Injector, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { DiagramModel } from '../../models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DiagramService } from '../../services';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'diagram-partial-config-edit',
  templateUrl: './diagram-partial-config-edit.component.html',
  styleUrls: ['./diagram-partial-config-edit.component.scss']
})
export class DiagramPartialConfigEditComponent implements OnInit, OnDestroy {
  dataSubscribtion: Subscription;
  dataLoaded = new BehaviorSubject(false)
  _data;
  @Input() set data(data) {
    debugger;
    this._data = data;
    this.dataLoaded.next(true);
  } get data() {
    return this._data;
  };
  diagramService: DiagramService;
  formGroup: FormGroup;
  constructor(
    private injector: Injector,
  ) {
    this.formGroup = this.injector.get('formGroup');
    this.diagramService = this.injector.get('diagramService');
  }
  ngOnInit() {
    // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
    //   .subscribe(data => {
    //     debugger;
    //   });
  }
  ngOnDestroy() {
    // this.dataSubscribtion.unsubscribe();
  }
  configChanged() { }
}

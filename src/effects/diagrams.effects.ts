import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import {
  DiagramsActionTypes, GetDiagrams, GetDiagramsStart, GetDiagramsSucceed, GetDiagramsFailed
} from '../actions';
import { DiagramService } from '../services';
import { DiagramModel, GetDiagramsApiModel } from '../models';

@Injectable()
export class DiagramEffects {

  constructor(
    private actions$: Actions<any>,
    private router: Router,
    private diagramService: DiagramService
  ) { }

  @Effect()
  DiagramRequest$ = this.actions$
    .ofType()
    .map(toPayload)
    .map((data) => new GetDiagramsStart())

  @Effect()
  getDiagram$ = this.actions$
    .ofType()
    .map(toPayload)
    .switchMap((data: GetDiagramsApiModel.Request) => {
      return this.diagramService.getDiagrams()
        .map(res => new GetDiagramsSucceed(res))
        .catch(() => Observable.of(new GetDiagramsFailed()))
    });

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

import {
  DiagramsActionTypes, GetDiagrams, GetDiagramsStart, GetDiagramsSucceed, GetDiagramsFailed
} from '../actions';
import { DiagramService } from '../services';
import { DiagramModel, GetDiagramsApiModel } from '../models';
import { map, switchMap, catchError } from 'rxjs/operators';

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
    .pipe(
      map(action => action.payload),
      map((data) => new GetDiagramsStart())
    )

  @Effect()
  getDiagram$ = this.actions$
    .ofType()
    .pipe(
      map(action => action.payload),
      switchMap((data: GetDiagramsApiModel.Request) => this.diagramService.getDiagrams()
        .pipe(
          map(res => new GetDiagramsSucceed(res)),
          catchError(() => Observable.of(new GetDiagramsFailed()))
        )
      )
    );

}

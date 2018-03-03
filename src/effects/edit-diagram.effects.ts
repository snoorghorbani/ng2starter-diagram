import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import {
	AddDiagramActionTypes,
	AddDiagramAction,
	AddDiagramActionStart,
	AddDiagramActionSucceed,
	AddDiagramActionFailed
} from "../actions";
import { DiagramService } from "../services";
import { AddDiagramApiModel } from "../models";

@Injectable()
export class AddDiagramEffects {
	constructor(private actions$: Actions<any>, private router: Router, private diagramService: DiagramService) { }

	@Effect()
	addDiagramRequest$ = this.actions$
		.ofType(AddDiagramActionTypes.ADD_DIAGRAM)
		.map(toPayload)
		.map((data) => new AddDiagramActionStart(data));

	@Effect()
	addDiagram$ = this.actions$
		.ofType(AddDiagramActionTypes.ADD_DIAGRAM_START)
		.map(toPayload)
		.switchMap((data: AddDiagramApiModel.Request) => {
			return this.diagramService
				.addDiagram(data)
				.map((res) => new AddDiagramActionSucceed(res))
				.catch(() => Observable.of(new AddDiagramActionFailed()));
		});
}

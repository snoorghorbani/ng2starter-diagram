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
	AddDiagramActionFailed,
	GenerateDiagramAction,
	StructureDefinitionStartAction,
	StructureDefinitionFinishedAction,
	DataLoadedAction
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

	@Effect({ dispatch: false })
	ADD_DIAGRAM_SUCCEED$ = this.actions$
		.ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED)
		.map(toPayload)
		.map((data) => {
			debugger;
			this.router.navigate(["diagrams"]);
			return Observable.empty();
		});

	@Effect()
	HAVE_ENDPOINT$ = this.actions$
		.ofType(AddDiagramActionTypes.HAVE_ENDPOINT)
		.map(toPayload)
		.map((data) => new DataLoadedAction(data));

	@Effect()
	DATA_LOADED$ = this.actions$
		.ofType(AddDiagramActionTypes.DATA_LOADED)
		.map(toPayload)
		.map((data) => new StructureDefinitionStartAction(data));

	@Effect()
	DIAGRAM_CONFIG_CHANGED$ = this.actions$
		.ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED)
		.map(toPayload)
		.map((data) => new GenerateDiagramAction(data));

	@Effect()
	STRUCTURE_DEFINITION_START$ = this.actions$
		.ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START)
		.map(toPayload)
		.switchMap((data) => {
			return data.getDataStructure().map(() => new StructureDefinitionFinishedAction(data));
		});

	@Effect()
	COLUMNS_MAPPING_CHANGED$ = this.actions$
		.ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED)
		.map(toPayload)
		.switchMap((data) => {
			debugger;
			return data.calculateColumns().map(() => new StructureDefinitionFinishedAction(data));
		});

	@Effect()
	STRUCTURE_DEFINITION_END$ = this.actions$
		.ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END)
		// .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
		.map(toPayload)
		.switchMap((data) => {
			return data.calculateColumns().map(() => new GenerateDiagramAction(data));
		});

	@Effect({ dispatch: false })
	GenerateDiagram$ = this.actions$
		.ofType(AddDiagramActionTypes.GENERATE_DIAGRAM)
		.map(toPayload)
		.map((data) => data.generateDiagram());
}

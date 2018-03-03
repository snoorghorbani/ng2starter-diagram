import { ActivatedRoute } from "@angular/router";
import { addDiagramReducer } from "../../reducers/add-diagram.reducer";
import { Component, OnInit } from "@angular/core";
import { SocketService } from "@soushians/infra";
import { DiagramService } from "../../services";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DiagramModel, EditDiagramApiModel } from "../../models";
import * as FeatureReducer from "../../reducers";
import { EditDiagramAction } from "../../actions";

@Component({
	selector: "diagram-edit",
	templateUrl: "./edit-diagram.component.html",
	styleUrls: ["./edit-diagram.component.scss"]
})
export class EditDiagramComponent implements OnInit {
	formGroup: FormGroup = EditDiagramApiModel.Request.formGroup;
	constructor(
		private diagramService: DiagramService,
		private route: ActivatedRoute,
		private store: Store<FeatureReducer.FeatureState>
	) {
		let Route = this.route.params.subscribe((params) => {
			const diagramId: string = params["id"];
			this.diagramService.getDiagram(diagramId).subscribe((data) => this.formGroup.patchValue(data));
		});
	}

	ngOnInit() { }

	add(event) {
		this.store.dispatch(new EditDiagramAction(this.formGroup.value));
	}
}

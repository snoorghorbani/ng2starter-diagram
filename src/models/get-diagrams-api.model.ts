import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DiagramModel } from ".";

export module GetDiagramsApiModel {

    export class Request implements HttpRequestBaseModel<Request>{
        diagram: string;

        constructor(initValue: GetDiagramsApiModel.Request = {} as GetDiagramsApiModel.Request) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }

        getRequestBody() {
            return {
            }
        }

        //static get formGroup() {
        // return new FormGroup({
        //   diagram: new FormControl('', [Validators.minLength(8), Validators.required])
        // })
        //}
    }

    export class Response {
        Result: DiagramModel[];
        constructor() {

        }
    }

}

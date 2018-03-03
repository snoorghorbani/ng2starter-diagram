import { FormGroup } from "@angular/forms";
import { DiagramModel } from ".";
export declare module EditDiagramApiModel {
    class Request {
        constructor(params: Request);
        getRequestQueryParams(): {};
        static readonly formGroup: FormGroup;
    }
    class Response {
        Result: DiagramModel;
        constructor();
    }
}

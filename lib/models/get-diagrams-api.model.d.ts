import { HttpRequestBaseModel } from "@soushians/shared";
import { DiagramModel } from ".";
export declare module GetDiagramsApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        diagram: string;
        constructor(initValue?: GetDiagramsApiModel.Request);
        getRequestBody(): {};
    }
    class Response {
        Result: DiagramModel[];
        constructor();
    }
}

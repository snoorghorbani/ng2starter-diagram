import { AddDiagramActions } from '../actions';
import { AddDiagramApiModel } from "../models";
import { responseStatusTypes } from '@soushians/shared';
export interface State {
    status: responseStatusTypes;
    data: AddDiagramApiModel.Request;
}
export declare const initialState: State;
export declare function addDiagramReducer(state: State, action: AddDiagramActions): State;
export declare const AddDiagramInfo: (state: State) => AddDiagramApiModel.Request;

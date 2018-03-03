"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var DiagramsReducer = require("./diagrams.reducer");
var fromEditDiagram = require("./edit-diagram.reducer");
var parentGuardReducer = require("./parent-guard.reducer");
exports.DiagramReducers = {
    diagrams: DiagramsReducer.diagramReducer,
    editDiagram: fromEditDiagram.Reducer,
    parentGuard: parentGuardReducer.ParentGuardReducer
};
//#region selectors
exports.selectFeatureState = store_1.createFeatureSelector("diagram");
// export const getDiagramInformationStatus = createSelector(
//   selectFeatureState,
//   (state: DiagramState) => state.diagram
// );
//#region edit diagram
exports.selectEditDiagramState = store_1.createSelector(exports.selectFeatureState, function (state) { return state.editDiagram; });
// export const getEditDiagram = createSelector(selectEditDiagramState, fromEditDiagram.EditDiagramInfo);
//#endregion
//export const selectUserInformationState = createSelector(
//  selectFeatureState,
//  (state: DiagramState) => state.user
//);
//export const getUser = createSelector(
//  selectUserInformaionState,
//  DiagramState.getUser
//);
//#endregion
//#endregion
//# sourceMappingURL=index.js.map
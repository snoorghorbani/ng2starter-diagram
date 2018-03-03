"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
exports.initialState = {
    route: '',
    result: false
};
function ParentGuardReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        default: {
            return state;
        }
    }
}
exports.ParentGuardReducer = ParentGuardReducer;
exports.getParentRoutingGuard = function (state) { return state; };
//# sourceMappingURL=parent-guard.reducer.js.map
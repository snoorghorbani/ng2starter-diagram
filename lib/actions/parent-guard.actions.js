"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParentGuardActionTypes;
(function (ParentGuardActionTypes) {
    ParentGuardActionTypes["ASK_FROM_PARENT_GUARD"] = "[USER][GUARD] ASK_FROM_PARENT_GUARD";
    ParentGuardActionTypes["PARENT_GUARD_APPROVED"] = "[USER][GUARD] PARENT_GUARD_APPROVED";
    ParentGuardActionTypes["PARENT_GUARD_REJECTED"] = "[USER][GUARD] PARENT_GUARD_REJECTED";
})(ParentGuardActionTypes = exports.ParentGuardActionTypes || (exports.ParentGuardActionTypes = {}));
var AskFromParentGuardAction = /** @class */ (function () {
    function AskFromParentGuardAction() {
        this.type = ParentGuardActionTypes.ASK_FROM_PARENT_GUARD;
    }
    return AskFromParentGuardAction;
}());
exports.AskFromParentGuardAction = AskFromParentGuardAction;
var ParentGuardApprovedAction = /** @class */ (function () {
    function ParentGuardApprovedAction() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_APPROVED;
    }
    return ParentGuardApprovedAction;
}());
exports.ParentGuardApprovedAction = ParentGuardApprovedAction;
var ParentGuardRejectedAction = /** @class */ (function () {
    function ParentGuardRejectedAction() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_REJECTED;
    }
    return ParentGuardRejectedAction;
}());
exports.ParentGuardRejectedAction = ParentGuardRejectedAction;
//# sourceMappingURL=parent-guard.actions.js.map
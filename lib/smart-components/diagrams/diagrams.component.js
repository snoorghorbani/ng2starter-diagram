"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var DiagramsComponent = /** @class */ (function () {
    function DiagramsComponent(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
        // this.diagrams
        //         .delay(100)
        //         .subscribe(diagrams =>
        //                 diagrams.Result.forEach(diagram =>
        //                         this.diagramService.generateDiagram(diagram.Chart, diagram._id, diagram.Source.Route, diagram.Source.Sync)));
    }
    DiagramsComponent.prototype.ngOnInit = function () {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    };
    DiagramsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "diagrams",
                    template: "<mat-grid-list cols=\"12\" rowHeight=\"100px\">   <mat-grid-tile *ngFor=\"let diagram of (diagrams | async)?.Result\"    [colspan]=\"diagram.Box.Cols\"    [rowspan]=\"diagram.Box.Rows\"    [style.color]=\"diagram.Box.Color\">     <dynamic-component-selector class=\"diagram-box\" [data]=\"diagram\"></dynamic-component-selector>   </mat-grid-tile> </mat-grid-list> <br /> <div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\"> </div> <div fxLayoutAlign='end center'>   <button mat-fab routerLink=\"../diagrams/add\" class=\"add-btn\">     <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>   </button> </div>",
                    styles: [":host{     width: 100%; }  .diagram-box{     margin : 15px; } .add-btn {   position: fixed;   bottom: 50px;   left: 25px;   z-index: 1; }"]
                },] },
    ];
    /** @nocollapse */
    DiagramsComponent.ctorParameters = function () { return [
        { type: services_1.DiagramService, },
    ]; };
    return DiagramsComponent;
}());
exports.DiagramsComponent = DiagramsComponent;
//# sourceMappingURL=diagrams.component.js.map
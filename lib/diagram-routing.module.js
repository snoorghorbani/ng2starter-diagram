"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var smart_components_1 = require("./smart-components");
var dumb_components_1 = require("./dumb-components");
var routes = [
    {
        path: 'diagrams',
        component: smart_components_1.DiagramModuleContainerComponent,
        children: [
            {
                path: '',
                component: smart_components_1.DiagramsComponent
            },
            {
                path: 'add',
                component: smart_components_1.AddDiagramComponent
            },
            {
                path: 'edit/:id',
                component: smart_components_1.AddDiagramComponent
            },
            {
                path: 'numero',
                component: dumb_components_1.NumericDiagramComponent
            },
            {
                path: 'tempo',
                component: dumb_components_1.ServerConnectingTimeDiagramComponent
            },
            {
                path: 'booleano',
                component: dumb_components_1.ServerStatusDiagramComponent
            }
        ]
    }
];
exports.RoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=diagram-routing.module.js.map
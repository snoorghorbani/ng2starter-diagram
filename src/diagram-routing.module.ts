import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiagramModuleContainerComponent, DiagramsComponent, AddDiagramComponent, EditDiagramComponent } from './smart-components';
import { NumericDiagramComponent, ServerStatusDiagramComponent, ServerConnectingTimeDiagramComponent } from "./dumb-components";

const routes: Routes = [
        {
                path: 'diagrams',
                component: DiagramModuleContainerComponent,
                children: [
                        {
                                path: '',
                                component: DiagramsComponent
                        },
                        {
                                path: 'add',
                                component: AddDiagramComponent
                        },
                        {
                                path: 'edit/:id',
                                component: AddDiagramComponent
                        },
                        {
                                path: 'numero',
                                component: NumericDiagramComponent
                        },
                        {
                                path: 'tempo',
                                component: ServerConnectingTimeDiagramComponent
                        },
                        {
                                path: 'booleano',
                                component: ServerStatusDiagramComponent
                        }
                ]
        }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

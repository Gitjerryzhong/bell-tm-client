import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditMode } from 'core/constants';

import { ProjectItemComponent } from './item/project-item.component';
import { ProjectListComponent } from './list/project-list.component';
import { ProjectFormEditorComponent } from './editor/form-editor.component';
import { FundViewComponent } from '../../application/form/fund/fund-view.component';
const routes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: 'create', component: ProjectFormEditorComponent,  data: {mode: EditMode.Create}},
    { path: ':projectId/fund', component: FundViewComponent},
    { path: ':id', component: ProjectItemComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class ProjectRoutingModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Dialog } from 'core/dialogs';
import { WorkflowModule } from 'core/workflow';

import { ProjectFormViewerModule } from '../../../application/form/shared/form-viewer.module';
import { ProjectDepartmentItemComponent } from './project-item.component';
import { ChangeFormModule } from '../replace-principal/form.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        WorkflowModule,
        ProjectFormViewerModule,
        ChangeFormModule,
    ],
    declarations: [
        ProjectDepartmentItemComponent,
    ],
    exports: [
        ProjectDepartmentItemComponent,
    ],
    providers: [
        Dialog,
    ],
})
export class ProjectDepartmentItemModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonDirectivesModule } from 'core/common-directives';

import { TaskFormViewerModule } from '../../../../settings/task/shared/form-viewer.module';
import { PipesModule } from '../../../../settings/shared/common-pipes';

import { TaskListComponent } from './task-list.component';
import { TaskItemComponent } from './task-item';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CommonDirectivesModule,
        PipesModule,
        TaskFormViewerModule,
    ],
    declarations: [
        TaskListComponent,
        TaskItemComponent,
    ],
    exports: [
        TaskListComponent,
        TaskItemComponent,
    ],
})
export class TaskListModule { }

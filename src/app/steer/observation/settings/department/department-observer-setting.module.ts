import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';

import { PipesModule } from '../../shared/pipes/observation-pipes.module';
import { ObservationCommonModule } from '../../common/observation-common.module';

import { DepartmentObserverSettingRoutingModule } from './department-observer-setting-routing.module';
import { ObserverEditorComponent } from './editor/observer-editor.component';
import { ObserverListComponent } from './list/observer-list.component';
import { ObserverService } from './observer.service';
import { ObserverReportComponent } from './report/observer-report.component';
import { IconModule } from 'core/icon';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CommonDialogsModule,
        CommonDirectivesModule,
        DepartmentObserverSettingRoutingModule,
        ObservationCommonModule,
        PipesModule,
        IconModule,
    ],
    providers: [
        Dialog,
        ObserverService,
        {provide: 'OBSERVER_API_URL', useValue: '/api/steer/departments/${departmentId}/settings'},
    ],
    declarations: [
        ObserverEditorComponent,
        ObserverListComponent,
        ObserverReportComponent,
    ],
    entryComponents: [
        ObserverEditorComponent,
    ],
})

export class DepartmentObserverSettingModule { }

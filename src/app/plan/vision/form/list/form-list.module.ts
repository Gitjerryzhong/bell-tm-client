import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonDirectivesModule } from 'core/common-directives';

import { PlanSharedModule } from '../../../shared/module';
import { VisionFormListComponent } from './form-list.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        CommonDirectivesModule,
        PlanSharedModule,
    ],
    declarations: [
        VisionFormListComponent,
    ],
    exports: [
        VisionFormListComponent
    ],
})
export class VisionFormListModule { }

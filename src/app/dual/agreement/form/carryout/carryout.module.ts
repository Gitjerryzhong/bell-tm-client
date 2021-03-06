import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonDirectivesModule } from 'core/common-directives';

import { AgreementCarryoutComponent } from './agreement-carryout-component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CommonDirectivesModule,
    ],
    declarations: [
        AgreementCarryoutComponent,
    ],
    exports: [
        AgreementCarryoutComponent,
    ],
})
export class AgreementCarryoutModule { }

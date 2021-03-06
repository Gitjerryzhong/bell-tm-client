import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';

import { TmAssetCommonModule } from '../.././../components/asset-common.module';
import { UserAreaListComponent } from './form-list.component';
import { UserAreaDialog } from './form-editor.dialog';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CommonDialogsModule,
        CommonDirectivesModule,
        TmAssetCommonModule,
    ],
    declarations: [
        UserAreaListComponent,
        UserAreaDialog,
    ],
    providers: [
        Dialog,
    ],
    exports: [
        UserAreaListComponent,
    ],
    entryComponents: [
        UserAreaDialog,
    ],
})
export class UserAreaListModule { }

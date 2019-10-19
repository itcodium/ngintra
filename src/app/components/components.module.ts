import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextComponent } from './input-text/input-text.component';
import { TableBootComponent } from './table-boot/table-boot.component';
import { ApiSearchComponent } from './api-search/api-search.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        InputTextComponent,
        TableBootComponent,
        ApiSearchComponent,

    ],
    declarations: [
        InputTextComponent,
        TableBootComponent,
        ApiSearchComponent,

    ]
})
export class ComponentsModule { }
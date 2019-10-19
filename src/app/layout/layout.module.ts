import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from '../components/menu/menu.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        MenuComponent
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        MenuComponent
    ]
})
export class LayoutModule { }
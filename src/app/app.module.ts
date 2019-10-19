import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { InputTextComponent } from './views/input-text/input-text.component';
import { ApiSearchComponent } from './views/api-search/api-search.component';
import { TableContentComponent } from './views/table-content/table-content.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    ApiSearchComponent,
    TableContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

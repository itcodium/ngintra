import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputTextComponent } from './views/input-text/input-text.component';
import { ApiSearchComponent } from './views/api-search/api-search.component';
import { TableContentComponent } from './views/table-content/table-content.component';


const routes: Routes = [
  { path: 'inputtext', component: InputTextComponent },
  { path: 'tablecontent', component: TableContentComponent },
  { path: 'apisearch', component: ApiSearchComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

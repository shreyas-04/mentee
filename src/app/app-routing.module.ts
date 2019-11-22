import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituteInfoComponent } from './institute/institute-info/institute-info.component';

const routes: Routes = [
  { path: 'info' , component: InstituteInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

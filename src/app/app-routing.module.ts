import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ConfirmApplicationComponent } from './component/confirmApplication/confirmApplication.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"employee",component:ConfirmApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

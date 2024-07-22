import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './component/employeeDetails/employeeDetails.component';
import { ConfirmApplicationComponent } from './component/confirmApplication/confirmApplication.component';

const routes: Routes = [
  {path:"",component:EmployeeDetailsComponent},
  {path:"confirm",component:ConfirmApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateSyudentComponent } from './update-syudent/update-syudent.component';

const routes: Routes = [
  {path:"add-student", component:AddStudentComponent},
  {path:"display-student", component:DisplayStudentComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"update-student",component:UpdateSyudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

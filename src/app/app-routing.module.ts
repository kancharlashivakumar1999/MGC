import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { AdminlogComponent } from './Admin/adminlog/adminlog.component';
import { FirstComponent } from './first/first.component';
import { MasterComponent } from './master/master.component';
import { StudenthomeComponent } from './Stduentfeee/studenthome/studenthome.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"student_log",component:MasterComponent},
  {path:"student",component:StudentComponent},
  {
    path:"",component:FirstComponent
  },
  {
    path:"Admin",component:AdminlogComponent
  },
  {
    path:"AdminMaster",component:AdminMasterComponent
  },
  
  {
    path:"student/:b",component:StudentComponent
  },
  {
    path:"studenthome",component:StudenthomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

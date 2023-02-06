import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { MasterComponent } from './master/master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { FirstComponent } from './first/first.component';
import { AdminlogComponent } from './Admin/adminlog/adminlog.component';

import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { MarksComponent } from './Admin/marks/marks.component';
import { StudenthomeComponent } from './Stduentfeee/studenthome/studenthome.component';
import { FeeComponent } from './Stduentfeee/fee/fee.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    StudentComponent,
    FirstComponent,
    AdminlogComponent,
    AdminMasterComponent,
    MarksComponent,
    StudenthomeComponent,
    FeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialExampleModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

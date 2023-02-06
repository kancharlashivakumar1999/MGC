import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegService } from 'src/app/reg.service';
import { StudentComponent } from 'src/app/student/student.component';
import { FeeComponent } from '../fee/fee.component';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private ser:RegService,private Mat:MatDialog,private d:Router) { }
  x=new Date();
  f:any;
  ngOnInit(): void {
this.sk(this.ser.isUser)
  }
  sk(ID:any)
  {
    return this.ser.get(this.ser.isUser).subscribe(y=>{this.f=y;})
  }
  open()
  {
    this.Mat.open(StudentComponent,{height:'60%',width:'30%'})
  }
  fee()
  {
    this.Mat.open(FeeComponent,{height:'40%',width:'30%'})

  }
  out()
  {
    this.d.navigate([''])
  }
}

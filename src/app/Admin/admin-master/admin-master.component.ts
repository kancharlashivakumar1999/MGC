import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RegService } from 'src/app/reg.service';
import { StudentComponent } from 'src/app/student/student.component';
import { MarksComponent } from '../marks/marks.component';

@Component({
  selector: 'app-admin-master',
  templateUrl: './admin-master.component.html',
  styleUrls: ['./admin-master.component.css']
})
export class AdminMasterComponent implements OnInit {

  constructor(private dis:RegService,private r:Router,private dia:MatDialog) { }
  x=new Date;
  Dloginform:any;
  @ViewChild(MatSort) Sort:MatSort|any;
  
  columns:string[]=['ID','Name','Action']
  dataSource=new MatTableDataSource;
  search(e:any)
  {
    this.Dloginform.filter=e.target.value
  }
  ngOnInit(): void {
    this.dis.List().subscribe((a:any)=>{this.Dloginform=new MatTableDataSource(a); 
      this.Dloginform.sort=this.Sort;})
  }
  log()
  {
    this.r.navigate(['']);
  }
  Add()
  {
    this.dia.open(MarksComponent,{height:'100%',width:'30%'})
  }

  view(ID:any)
  {
    this.dia.open(MarksComponent,{height:"100%",width:"40%",data:ID})
 
  }
  close()
  {
    this.dia.closeAll
  }
  

}

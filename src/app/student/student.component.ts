import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  item!:any;

   constructor(private ser:RegService,private mat:MatDialog) { }

  ngOnInit(): void {
this.sk(this.ser.isUser)
  }
  x()
  {
    this.mat.closeAll()

  }
  sk(ID:any)
  {
   return this.ser.get(this.ser.isUser).subscribe((x:any)=>{this.item=x; })
  }

}

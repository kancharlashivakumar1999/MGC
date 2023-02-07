import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  constructor(private mat:MatDialog,  @Inject(MAT_DIALOG_DATA) public data:any,private ser:RegService) { }

  ngOnInit(): void {
  }
  block(ID:any)
  {
       this.ser.block(this.data.ID).subscribe();
      console.log(this.data.ID)
      location.reload();
  }
  unblock(ID:any)
  {
    this.ser.unblock(this.data.ID).subscribe();
    console.log(this.data.ID)
    location.reload();
  }
}

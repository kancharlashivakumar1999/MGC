import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit {
shiva:any;
  constructor(private ser:RegService,private dia:MatDialog) { }

  ngOnInit(): void {
    this.raj(this.ser.isUser)
  }
  raj(ID:any)
  {
    return this.ser.feeID(this.ser.isUser).subscribe((d:any)=>{this.shiva=d; })
  }
  x()
  {
    this.dia.closeAll();
  }
}

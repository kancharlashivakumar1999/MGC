import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent implements OnInit {

  constructor(private ser:RegService,private route:Router) { }
  Aloginform!:any;
onlog()
{
  this.ser.Adminlog(this.Aloginform.value.UserName,this.Aloginform.value.ID);
  if(this.ser.logdata)
  {
    this.route.navigate(['AdminMaster']);
  }
}
  ngOnInit(): void {
    this.Aloginform=new FormGroup({
      UserName:new FormControl(''),
      ID:new FormControl(''),
      d:new FormControl('')
    });
  }

}

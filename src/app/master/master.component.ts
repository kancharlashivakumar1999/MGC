import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  loginform!:any;
  constructor(private ser:RegService,private route:Router) { }
  
  ngOnInit(): void {
    this.loginform=new FormGroup({
      UserName:new FormControl(''),
      ID:new FormControl(''),
      d:new FormControl('')
    });
  }
  onlog()
  {
    console.log(this.ser.isUser);
     this.ser.log(this.loginform.value.UserName,this.loginform.value.ID)
     if(this.ser.isUser)
     {
       this.route.navigate(['studenthome'])
     }
  }

}

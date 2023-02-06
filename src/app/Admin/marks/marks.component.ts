import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  Marksform:any;
  constructor(private ser:RegService,@Inject(MAT_DIALOG_DATA) public data:any,private did:MatDialog) { }

  ngOnInit(): void {
    this.Marksform=new FormGroup({
      ID:new FormControl(''),
      Name:new FormControl(''),
      Applied_Physics:new FormControl(''),
      Oop:new FormControl(''),
      M1:new FormControl(''),
      PS1:new FormControl(''),
      EM1:new FormControl(''),
      AED:new FormControl(''),
      Total:new FormControl(''),
      percentag:new FormControl(''),
      
    });
    this.Marksform.patchValue({
      ID:this.data.ID,
      Name:this.data.Name,
      Applied_Physics:this.data.Applied_Physics,
      Oop:this.data.Oop,
      M1:this.data.M1,
      PS1:this.data.PS1,
      EM1:this.data.EM1,
      AED:this.data.AED,
      Total:this.data.Total,
      percentag:this.data.percentag
    });
    console.log(this.Marksform.value);
  }
  save()
  {
    let shiva=JSON.stringify(this.Marksform.value);
    console.log(this.Marksform.value);
    this.ser.AddMarks(shiva);
    window.location.reload();

  }
  x()
  {
    this.did.closeAll();
  }
  clear()
  {
    this.Marksform.reset();
  }

}

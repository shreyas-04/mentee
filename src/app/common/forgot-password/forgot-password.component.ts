import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  step:number = 1;
  options:string[] = ['Submit', 'Authenticate', 'Submit']
  btnText:string= 'Submit';
  @ViewChild('f', { static: false }) fpass: NgForm;
  @ViewChild('f1', { static: false }) fpass2: NgForm;
  @ViewChild('f2', { static: false }) fpass3: NgForm;

  constructor() { 

  }

  ngOnInit() {

  }

  onSubmit() {
    if(this.step!=4){
      this.step++;
    }
    this.fpass2.controls.mobemail.setValue("abc");
    
  }

}

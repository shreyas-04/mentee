import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-institute-signup',
  templateUrl: './institute-signup.component.html',
  styleUrls: ['./institute-signup.component.scss']
})
export class InstituteSignupComponent implements OnInit {

  @ViewChild('s1', {static: false}) s1: NgForm;


  step:number = 1;
  couponValid:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    this.step++;
  }

  tryCoupon(coupon: string) {
    console.log(coupon);
    this.couponValid = true;
  }


  // onSubmit2() {
  //   console.log(this.s2);
  //   this.step++;
  // }
}

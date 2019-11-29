import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('f', {static: false}) f: NgForm;
  type:string = "user";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    console.log(this.type);
  }

}

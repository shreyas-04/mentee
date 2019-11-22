import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-institute-info',
  templateUrl: './institute-info.component.html',
  styleUrls: ['./institute-info.component.scss']
})
export class InstituteInfoComponent implements OnInit {

  status:string = "Active";

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('f', { static: false }) formbs: NgForm;
  onSubmit() {
    console.log(this.formbs);
  }

}

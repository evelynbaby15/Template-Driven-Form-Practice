import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  defaultQuestion = 'pet';
  answer = '';
  gender = ['male', 'female'];

  ngOnInit(): void {
    console.log('form start state from ngOnit:', this.myForm);
  }
  @ViewChild('f') myForm: NgForm;

  constructor() {
    console.log('form start state from constructor:', this.myForm);
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log('Get submitted form:', form);
    // Note that this.myForm is the same with params pass in this method: form.  
    // console.log('test at view child to get form:', this.myForm);
  }
}

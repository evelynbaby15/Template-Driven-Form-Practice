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

  userResponse = {
    username: '',
    gender: '',
    email: '',
    secretQuestion: '',
    answer: ''
  };
  submitted = false;

  ngOnInit(): void {
    console.log('form start state from ngOnit:', this.myForm);
  }
  @ViewChild('f') myForm: NgForm;

  constructor() {
    console.log('form start state from constructor:', this.myForm);
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // setValue 可用在 reset value for form
    // this.myForm.setValue({
    //   userData: {
    //     username: 'eve',
    //     email: 'eve@cc.bb'
    //   },
    //   ssssecret: 'teacher',
    //   guestionAnswer: 'correct ans',
    //   gender: 'female'
    // });
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName,
        email: 'eve@cht.com.tw'
      }
    });

  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log('Get submitted form:', form);
    // Note that this.myForm is the same with params pass in this method: form.  
    // console.log('test at view child to get form:', this.myForm);

    this.userResponse.username = this.myForm.value.userData.username;
    this.userResponse.email = this.myForm.value.userData.email;
    this.userResponse.gender = this.myForm.value.gender;
    this.userResponse.secretQuestion = this.myForm.value.ssssecret;
    this.userResponse.answer = this.myForm.value.guestionAnswer;

    this.myForm.reset();
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg: string = "";
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      firstname: new FormControl("", [Validators.required,
      Validators.minLength(3),
      Validators.pattern("^[a-zA-Z]*$")]
      ),

      lastname: new FormControl("", [Validators.required,
      Validators.minLength(3),
      Validators.pattern("^[a-zA-Z]*$")]),

      email: new FormControl("", [Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$")]),
      amount: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    });
  }//constructor

  onRegisterClick(){
    if(this.myForm.valid){
        this.msg="Registration Success For : "+this.myForm.controls.firstname.value;
    }else{
        this.msg = "Registration Failed";
    }
  }
}

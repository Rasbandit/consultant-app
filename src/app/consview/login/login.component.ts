import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user = {
   email: 'd@d.com',
   password: 'dd6633',
   gender: 'male'
};

gender = [
  'male',
  'female'
]

//using square brackets with ngModel with let you pre-populate info
// [ngModel]
// using two way
//[(ngModel)]

onSubmit(form: NgForm) {
  console.log(form.value);
}

}

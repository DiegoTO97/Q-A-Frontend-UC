import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.register = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword });
  }

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log(this.register);
  }

  checkPassword(group: FormGroup): any{
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;

    return pass === confirmPass ? null : {notSame: true};
  }
}

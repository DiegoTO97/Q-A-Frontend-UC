import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassword: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePassword = this.fb.group({
      previousPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword });
   }

  ngOnInit(): void {
  }

  savePassword(): void{
    console.log(this.changePassword);
  }

  checkPassword(group: FormGroup): any{
    const pass = group.controls['newPassword'].value;
    const confirmPass = group.controls['confirmPassword'].value;

    return pass === confirmPass ? null : {notSame: true};
  }

}

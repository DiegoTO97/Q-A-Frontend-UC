import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private toastr: ToastrService) { 
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
    this.loading = true;
    const user: User = {
      userName: this.register.value.user,
      password: this.register.value.password
    }

    this.userService.saveUser(user).subscribe(data => {
      console.log(data);
      this.toastr.success('The user ' + user.userName + ' was registered succesfull', 'User Registered');
      this.router.navigate(['/start/login']);
      this.loading = false;
    }, error => {
        this.loading = false;
        this.register.reset();
        console.log(error);
        this.toastr.error(error.error.message, 'Error');
    });
  }

  checkPassword(group: FormGroup): any{
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['confirmPassword'].value;

    return pass === confirmPass ? null : {notSame: true};
  }
}

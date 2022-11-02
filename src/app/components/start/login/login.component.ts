import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private loginService: LoginService) { 
    this.login = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  log(): void{
    const user: User = {
      userName: this.login.value.user,
      password: this.login.value.password 
    }
    this.loading = true;
    this.loginService.login(user).subscribe(data => {
        console.log(data);
        this.loading = false;
        this.loginService.setLocalStorage(data.user);
        this.router.navigate(['/dashboard']);
    }, error =>
    {
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
    });
    
    console.log(user);
  }
}

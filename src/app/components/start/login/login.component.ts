import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';

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
              private router: Router) { 
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
    setTimeout(()=>{
      if(user.userName === 'Diego' && user.password === 'admin')
      {
        this.login.reset();
        this.router.navigate(['/dashboard']);
        this.toastr.success('Login succesfull', 'Succes', {
          timeOut: 2000,
        });
      } else {
        this.toastr.error('User or password incorrect', 'Error', {
          timeOut: 3000,
        });
        this.login.reset();
      }
      this.loading=false;
    },2000);
    
    console.log(user);
  }
}

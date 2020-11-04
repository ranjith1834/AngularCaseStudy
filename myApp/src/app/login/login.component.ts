import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/common/user';
import { LoginApiService } from './login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserModel;

  constructor(private route:Router, private loginApiService:LoginApiService) { }

  ngOnInit() {
    this.user = new UserModel();    
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.loginApiService.AuthenticateUser(this.user).subscribe((result) => {
        if(this.loginApiService.isActive) {
          this.route.navigate(['/home']);
        }
        else{
          this.user.userName=this.user.password="";
          alert('Enter valid credentials');
        }
      });
    }
    if(!form.valid) {
      this.user.userName=this.user.password="";
      alert('Enter valid credentials');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signupuser: any[] = [];
  signupObj: any = {
    firstname: '',
    lastname: '',
    username:'',
    email: '',
    password: ''
  };
  loginobj: any = {
    email: '',
    password: ''
  };

  constructor() { }
  ngOnInit(): void { }
  onSignup() {
    this.signupuser.push(this.signupObj);
    localStorage.setItem('signupusers', JSON.stringify(this.signupObj));
    this.signupObj = {
      email: '',
      password: ''
    };
  }
  onLogin() {
    const isUserExist = this.signupuser.find(m => m.email == this.loginobj.email&& m.password==this.loginobj.password);
    if(isUserExist != undefined){
      alert('User Login Succesfully');
    }else{
      alert('Weong credentials');
    }
  }
  mouselogin: number=0;
  mousesignup: number=0;

  handleMouseMove(event:MouseEvent): void{
    this.mouselogin=event.clientX;
    this.mousesignup=event.clientY;
  }

 
}

  
  


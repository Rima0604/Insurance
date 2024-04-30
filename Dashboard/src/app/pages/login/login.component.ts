import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule , FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit{
  
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  loginForm !: FormGroup;
  


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Password: ['', Validators.required]
    });
  }
  login(){
    this.authService.loginService(this.loginForm.value)
    .subscribe({
      next:(res)=>{
        alert("Login is Success!");
        this.router.navigate(['home'])
      },
      error:(err)=>{
        console.log(err);
      }
    })
    console.log(this.loginForm.value);
  }
}

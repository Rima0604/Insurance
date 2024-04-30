import { NgIf } from '@angular/common';
import { Component, NgModule, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  fb= inject(FormBuilder);
  authService =inject(AuthService);
  router = inject(Router);

  registrationform !: FormGroup;



  ngOnInit(): void {
    this.registrationform = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      UserName: ['', Validators.required],
       Email:  ['', Validators.compose([Validators.required, Validators.email])],
      Password: ['',Validators.compose([Validators.required,Validators.minLength(6)])]
    });
  }

  register(){
  
    this.authService.registerService(this.registrationform.value)
    .subscribe({
     next:(res)=>{
       alert("User Created!");
       this.registrationform.reset();
       this.router.navigate(['login'])
     },
     error:(err)=>{
       console.log(err);
     }
    })
    console.log(this.registrationform.value);
   }

}







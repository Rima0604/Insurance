import { CommonModule} from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup,FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent implements OnInit {
  
  fb= inject(FormBuilder);
  authService =inject(AuthService);
  router = inject(Router);

  registerForm !: FormGroup;


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      UserName: ['', Validators.required],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Password: ['', Validators.required]
    });
  }
register(){
  
 this.authService.registerAdminService(this.registerForm.value)
 .subscribe({
  next:(res)=>{
    alert("User Created!");
    this.registerForm.reset();
    this.router.navigate(['login'])
  },
  error:(err)=>{
    console.log(err);
  }
 })
 console.log(this.registerForm.value);
}


}

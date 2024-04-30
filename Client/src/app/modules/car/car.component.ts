import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  router = inject(Router);
  carForm !: FormGroup;
  

  constructor(private fb: FormBuilder, private ClientService: ClientService) { }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      carNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pinCode: ['', Validators.required]
    });
  }

  onSubmit(){
  
    this.ClientService.carService(this.carForm.value)
    .subscribe({
     next:(res)=>{
       alert("Submit Successfuly!");
       //this.bikeForm.reset();
       this.router.navigate(['customer'])
     },
     error:(err)=>{
       console.log(err);
     }
    });
    console.log(this.carForm.value);
   }

}

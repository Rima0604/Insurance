import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {  

  router = inject(Router);
  customerForm !: FormGroup;
  

  constructor(private fb: FormBuilder, private ClientService: ClientService) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      zipCode: ['', Validators.required],
      address: ['',Validators.required]
    });
  }

  onSubmit(){
  
    this.ClientService.customerService(this.customerForm.value)
    .subscribe({
     next:(res)=>{
       alert("Submit Successfuly!");
       this.customerForm.reset();
       this.router.navigate(['home'])
     },
     error:(err)=>{
       console.log(err);
     }
    });
    console.log(this.customerForm.value);
   }
}


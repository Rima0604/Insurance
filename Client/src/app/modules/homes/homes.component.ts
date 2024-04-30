import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';
import { ClientService } from '../../services/client.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css'
})
export class HomesComponent {

  router = inject(Router);
  homeForm !: FormGroup;
  selectedIndex: any;
  options: any;
  form: any;


  constructor(private fb: FormBuilder, private ClientService: ClientService) { }

  ngOnInit(): void {
    this.homeForm = this.fb.group({
      Name: ['', Validators.required],
      Gender: ['',Validators.required],
      Age: ['',Validators.required],
      MobileNumber: ['', Validators.required],
      BirthDate: ['',Validators.required]
    });
  }

  next() {

    }

  onSubmit(){
    this.ClientService.healthService(this.homeForm.value)
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
    console.log(this.homeForm.value);
   }

}

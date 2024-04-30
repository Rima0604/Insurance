import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive,Router} from '@angular/router';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-bike',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf,ReactiveFormsModule],
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css'
})
export class BikeComponent implements OnInit{
  router = inject(Router);
  bikeForm !: FormGroup;
  

  constructor(private fb: FormBuilder, private ClientService: ClientService) { }

  ngOnInit(): void {
    this.bikeForm = this.fb.group({
      bikeNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pinCode: ['', Validators.required]
    });
  }

  onSubmit(){
    this.ClientService.bikeService(this.bikeForm.value)
    .subscribe({
     next:(res)=>{
       alert("Submit Successfuly!");
       this.bikeForm.reset();
       this.router.navigate(['customer'])
     },
     error:(err)=>{
       console.log(err);
     }
    });
    console.log(this.bikeForm.value);
   }

  
  }




 

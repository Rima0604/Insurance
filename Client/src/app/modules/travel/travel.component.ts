import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent implements OnInit {
  
  router = inject(Router);
  travelForm !: FormGroup;


  constructor(private fb: FormBuilder, private ClientService: ClientService) { }

  ngOnInit(): void {
    this.travelForm = this.fb.group({
      countryName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  onSubmit(){
  
    this.ClientService.travelService(this.travelForm.value)
    .subscribe({
     next:(res)=>{
       alert("Submit Successfuly!");
       this.travelForm.reset();
       this.router.navigate(['customer'])
     },
     error:(err)=>{
       console.log(err);
     }
    });
    console.log(this.travelForm.value);
   }

}

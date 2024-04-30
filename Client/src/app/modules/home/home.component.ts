import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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

  onprevious() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.form.patchValue({ selectedOption: this.options[this.selectedIndex] });
    }
    }
    onnext() {
      if (this.selectedIndex < this.options.length - 1) {
        this.selectedIndex++;
        this.form.patchValue({ selectedOption: this.options[this.selectedIndex] });
      }
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

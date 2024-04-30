import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { NgFor} from '@angular/common';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export default class EditUserComponent implements OnInit{
data: any;
  
  constructor(private http: HttpClient, private dataService: DataService,
  private ref: MatDialogRef<EditUserComponent>){}

  ngOnInit(): void {
  this.loadData();
  }
  
  loadData(): void {
 this.dataService.getData()
 .subscribe(data =>{
  this.data = data;
 })
  }

  close() {
    this.ref.close('cancle using finction');
    }
  
}

import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css'
})
export default class ServicesListComponent implements OnInit {
updateUser(arg0: any) {
throw new Error('Method not implemented.');
}
customer:any;
data:any;

constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData().subscribe(data => {
      this.data = data;
    });
  }
  getData(){
    return this.http.get<any>('http://localhost:8800/server/customer');
  }

  deleteUser(id:string) {
    console.log("Delete id >",id);

    this.http.delete(`http://localhost:8800/server/customer/${id}`)
    .subscribe(
      (res) => {
        console.log('customer deletes successfuly');
      },
      (error) => {
        console.error('error deleting user:', error);
      }
      );
    
    }
    


}

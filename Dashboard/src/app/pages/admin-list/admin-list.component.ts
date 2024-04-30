import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import EditUserComponent from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';
import HomeComponent from '../../components/home/home.component';

@Component({
  selector: 'app-admin-list',
  standalone: true,
  templateUrl: './admin-list.component.html',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterOutlet, RouterLink, HomeComponent],
  styleUrls: ['./admin-list.component.css']
})
export default class AdminlistComponent implements OnInit{
  user:any;
  data:any;
  
  
  constructor(private http: HttpClient,   private dialog: MatDialog) {}
  
    ngOnInit() {
      this.getData().subscribe(data => {
        this.data = data;
      });
    }
    getData(){
      return this.http.get<any>('http://localhost:8800/server/user/');
    }

    OpenEdit() {
      var _popup= this.dialog.open(EditUserComponent, {
        height: '60%',
        width: '330px',
        enterAnimationDuration:'1000ms',
        exitAnimationDuration: '1000ms',
         position:{
          left:'35%',
         }
      });
      _popup.afterClosed().subscribe((user: any)=>{
        console.log(user)
      })
      }
  
    deleteUser(id:string) {
      console.log("Delete id >",id);

      this.http.delete(`http://localhost:8800/server/user/delete/${id}`)
      .subscribe(
        (res) => {
          console.log('User deletes successfuly');
        },
        (error) => {
          console.error('error deleting user:', error);
        }
        );
      
      }
  

}


 



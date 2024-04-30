import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  
  bikeService(registerObj: any){
    
    return this.http.post<any>('http://localhost:8800/server/bikes', registerObj);
  }

  carService(registerObj: any){
    
    return this.http.post<any>('http://localhost:8800/server/cars', registerObj);
  }

  healthService(registerObj: any){
    
    return this.http.post<any>('http://localhost:8800/server/health', registerObj);
  } 
  travelService(registerObj: any){
    
    return this.http.post<any>('http://localhost:8800/server/travels', registerObj);
  }

  customerService(registerObj: any){
    
    return this.http.post<any>('http://localhost:8800/server/customer', registerObj);
  }



}

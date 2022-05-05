import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  async GetUsers(){
  return await this.http.get("https://jsonplaceholder.typicode.com/users").toPromise();
 }
 async GetLocalHotels(){
   return await this.http.get("https://localhost:44352/api/Hotels/GetHotels").toPromise();
 }

}


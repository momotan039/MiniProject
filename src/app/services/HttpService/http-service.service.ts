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
 async GetVideoGames(){
  return await this.http.get("https://627a44364a5ef80e2c16e872.mockapi.io/VedioGames").toPromise();
 }
 async GetLocalHotels(){
   return await this.http.get("https://localhost:44352/api/Hotels/GetHotels").toPromise();
 }

}


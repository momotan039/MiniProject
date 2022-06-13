import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoGame } from 'src/app/model/VideoGame';
import { DataService } from '../DataService/data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http:HttpClient) { }

 async GetVideoGames(){
  return await this.http.get("https://627a44364a5ef80e2c16e872.mockapi.io/VedioGames").toPromise();
 }
 async PostGame(game:VideoGame){
    await this.http.post("https://627a44364a5ef80e2c16e872.mockapi.io/VedioGames",{
      backGround: game.backGround,
      year: game.year,
      price: game.price,
      type: game.type,
      title: game.title,
    }).toPromise().then(e=>{
    });
 }

 async EditGame(game:VideoGame){
   await this.http.put("https://627a44364a5ef80e2c16e872.mockapi.io/VedioGames/"+game.id,game).toPromise().then(d=>{
   DataService.RefreshViedoGameLists(this);
   })
 }
 async DeleteGame(id:number){
   await this.http.delete("https://627a44364a5ef80e2c16e872.mockapi.io/VedioGames/"+id).toPromise().then(d=>{
    DataService.RefreshViedoGameLists(this);
   })
 }
}

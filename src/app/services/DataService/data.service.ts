import { HttpService } from 'src/app/services/HttpService/http.service';
import { Injectable } from '@angular/core';
import { VideoGame } from 'src/app/model/VideoGame';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static allGames:VideoGame[];
  static Ps1Games:VideoGame[]=[];
  static Ps2Games:VideoGame[]=[];
  static Ps3Games:VideoGame[]=[];
  constructor() { }
  static RefreshViedoGameLists( myHttpClinet:HttpService){
    DataService.Ps1Games=[];
    DataService.Ps2Games=[];
    DataService.Ps3Games=[];
    myHttpClinet.GetVideoGames().then(g=>{
      DataService.allGames=g as VideoGame[];
         //fill ps1 & ps2 & ps3 game
     DataService.allGames.forEach(game => {
      if(game.type=="Ps1")
        DataService.Ps1Games.push(game)
      else  if(game.type=="Ps2")
          DataService.Ps2Games.push(game)
        else
        DataService.Ps3Games.push(game)
    });
      })
  }
}

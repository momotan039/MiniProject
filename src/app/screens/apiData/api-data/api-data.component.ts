import { HttpService } from './../../../services/HttpService/http.service';
import { VideoGame } from './../../../model/VideoGame';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  VideoGames=<any>[]
  VideoGame:VideoGame=new VideoGame()

  constructor(private HttpService:HttpService) {


    this.HttpService.GetVideoGames().then(g=>{
      this.VideoGames=g
    })

}
DeleteGmae(id:number){
  let res=window.confirm("Do want to Delete It ?")
  if(res)
this.HttpService.DeleteGame(id).then(e=>{
  this.HttpService.GetVideoGames().then(g=>{
    this.VideoGames=g
  })
  alert("Delete Success!!")
});
}
FillAddForm(game:VideoGame){
  this.VideoGame=game;
}
ngOnInit(): void {
}


}

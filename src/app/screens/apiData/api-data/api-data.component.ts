import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  Users=<any>[]
  VideoGames=<any>[]

  constructor(private HttpService:HttpServiceService) {

     this.HttpService.GetUsers().then(u=>{
      this.Users=u
    })
    this.HttpService.GetVideoGames().then(g=>{
      this.VideoGames=g
    })

}
ngOnInit(): void {
}
}

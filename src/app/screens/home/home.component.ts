import { HttpClient } from '@angular/common/http';
import { VideoGame } from 'src/app/model/VideoGame';
import { Component,  Input, OnInit} from '@angular/core';
import { HomePage } from 'src/app/data/PagesData';
import { Page } from 'src/app/model/Page';
import { Ps1GamesData } from 'src/app/data/Ps1GamesData';
import { Ps2GamesData } from 'src/app/data/Ps2GamesData';
import { Ps3GamesData } from 'src/app/data/Ps3GamesData';
import { allGames } from 'src/app/data/Constance';
import { HttpServiceService } from 'src/app/services/HttpService/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  PageDetails:Page=HomePage

  PageContents=<any>[]

  constructor(private HttpService:HttpServiceService) {
    this.HttpService.GetVideoGames().then(g=>{
      this.PageContents=g;
    })
  }
  ngOnInit(): void {

  }

}


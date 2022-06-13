import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomePage } from './data/PagesData';
import { Page } from './model/Page';
import { VideoGame } from './model/VideoGame';
import { Data } from '@angular/router';
import { DataService } from './services/DataService/data.service';
import { HttpService } from './services/HttpService/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private myHttpClinet:HttpService){


  }
  ngOnInit(): void {
     //retrive all game data from server just when running app first time
     DataService.RefreshViedoGameLists(this.myHttpClinet);
  }
  // public Home:Page=HomePage;
  // //undefined|string=HomePage.Title
  //   GetTitleHome:string=this.Home.Title!;

}




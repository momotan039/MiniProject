import { Component, OnInit } from '@angular/core';
import { PS3Page } from 'src/app/data/PagesData';
import { Ps3GamesData } from 'src/app/data/Ps3GamesData';
import { Page } from 'src/app/model/Page';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-ps3',
  templateUrl: './ps3.component.html',
  styleUrls: ['./ps3.component.css']
})
export class PS3Component implements OnInit {
  PageDetails:Page=PS3Page
  PageContents:any
  constructor() { }
  ngOnInit(): void {
    debugger;
    this.PageContents=DataService.Ps3Games
  }

}

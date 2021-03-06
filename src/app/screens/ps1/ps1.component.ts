import { Component, OnInit, Input } from '@angular/core';
import { PS1Page } from 'src/app/data/PagesData';
import { Ps1GamesData } from 'src/app/data/Ps1GamesData';
import { Page } from 'src/app/model/Page';
import { VideoGame } from 'src/app/model/VideoGame';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-ps1',
  templateUrl: './ps1.component.html',
  styleUrls: ['./ps1.component.css']
})
export class PS1Component implements OnInit {

  PageDetails:Page=PS1Page
  PageContents:any
  constructor() {
  }
  @Input()PageContent?:Array<VideoGame>;
  ngOnInit(): void {
    debugger;
  this.PageContents=DataService.Ps1Games
  }
}

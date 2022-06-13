import { Component, OnInit } from '@angular/core';
import { PS2Page } from 'src/app/data/PagesData';
import { Ps2GamesData } from 'src/app/data/Ps2GamesData';
import { Page } from 'src/app/model/Page';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-ps2',
  templateUrl: './ps2.component.html',
  styleUrls: ['./ps2.component.css']
})
export class PS2Component implements OnInit {
  PageDetails:Page=PS2Page
  PageContents:any
  constructor() { }

  ngOnInit(): void {
    debugger;
    this.PageContents=DataService.Ps2Games
  }

}

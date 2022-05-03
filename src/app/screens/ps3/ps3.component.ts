import { Component, OnInit } from '@angular/core';
import { PS3Page } from 'src/app/data/PagesData';
import { Ps3GamesData } from 'src/app/data/Ps3GamesData';
import { Page } from 'src/app/model/Page';

@Component({
  selector: 'app-ps3',
  templateUrl: './ps3.component.html',
  styleUrls: ['./ps3.component.css']
})
export class PS3Component implements OnInit {
  PageDetails:Page=PS3Page
  PageContents=Ps3GamesData
  constructor() { }

  ngOnInit(): void {
  }

}

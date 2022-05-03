import { Component, OnInit } from '@angular/core';
import { HomePage } from 'src/app/data/PagesData';
import { Page } from 'src/app/model/Page';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public Home:Page=HomePage;
  //undefined|string=HomePage.Title
   public GetTitleHome:string=this.Home.Title!;
  constructor() { }

  ngOnInit(): void {
  }

}

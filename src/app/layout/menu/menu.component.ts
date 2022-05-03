import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/data/MenuItems';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   MenuItems:MenuItem[]=items
  constructor() { }

  ngOnInit(): void {
  }

}

import { Ps1GamesData } from 'src/app/data/Ps1GamesData';
import { CartService } from '../../services/Cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { VideoGame } from 'src/app/model/VideoGame';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/DataService/data.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  constructor(private cartService:CartService,private route: ActivatedRoute) {}
  addToCart() {
    var item=this.cartService.getItems().find(I=>I.title==this.videoGame?.title)
      if(item!=null)//Check if current game existed in cart
      {
        window.alert('this Game Existed in the cart!');
        return
      }
    this.cartService.addToCart(this.videoGame!);
    window.alert('Your Game has been added to the cart!');
    console.log(this.cartService.getItems())
  }

  videoGame?:VideoGame;
  ngOnInit(): void {
    //  this.routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute =this.routeParams.get('Title');
    // // Find the product that correspond with the id provided in route.
    this.videoGame=DataService.allGames.find(game=>game.title==this.route.snapshot.params['name']);
  }
}

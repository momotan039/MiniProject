import { VideoGame } from 'src/app/model/VideoGame';
import { CartService } from '../../services/Cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private CartService:CartService) { }
  listVideoGame?:VideoGame[];
  totalPrice:number=0;

  clearCart(){
    this.listVideoGame=this.CartService.clearCart()
    this.totalPrice=0
  }
  removeGame(game:VideoGame){

    this.listVideoGame?.forEach(item=>{
      if(item==game)
      this.totalPrice-=item.price!;
    });

    this.CartService.removeItem(game);
  }

  ngOnInit(): void {
    this.listVideoGame=this.CartService.getItems()
    this.listVideoGame.forEach(item=>{
      this.totalPrice+=item.price!;
    })
  }
}

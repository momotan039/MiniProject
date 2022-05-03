import { Injectable } from '@angular/core';
import { VideoGame } from '../../model/VideoGame';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private items: VideoGame[] = [];
  /* . . . */

    removeItem(game:VideoGame){
      this.items.forEach( (_game, index) => {
        if(game === _game)
         this.items.splice(index,1);
      });
    }
    addToCart(game: VideoGame) {
      this.items.push(game);
    }
    getItems() {
      return this.items;
    }

    clearCart() {
      this.items = [];
      return this.items;
    }

  constructor() { }
}

import { allGames } from './../../data/Constance';
import { VideoGameService } from './../../services/VideoGame/video-game.service';
import { CartService } from './../../services/Cart/cart.service';
import { VideoGame } from './../../model/VideoGame';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  videoGame:VideoGame={
    Title:"",
    BackGround:"",
  };
  constructor(private VideoGameService:VideoGameService) { }

  ngOnInit(): void {

  }

  AddGame(){
    if(this.videoGame.Title==""||
    this.videoGame.BackGround==""||
    this.videoGame.Year==undefined||
    this.videoGame.price==undefined
    )
    {
      alert("Fill All Field")
      return;
    }
    if(this.videoGame.type==undefined)
    {
      alert("Please select type of Game!!")
      return
    }
    allGames.splice(0,0,this.videoGame)
    alert("New Game Saved Successfully")
    this.videoGame=new VideoGame();
  }

}

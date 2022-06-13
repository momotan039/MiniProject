import { CartService } from './../../services/Cart/cart.service';
import { VideoGame } from './../../model/VideoGame';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/HttpService/http.service';
import { DataService } from 'src/app/services/DataService/data.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  @Input() videoGame:VideoGame={
    title:"",
    backGround:"",
  };
  constructor(
    private HttpServiceService:HttpService) {

     }
     @Input() method="Add"
  ngOnInit(): void {

  }

  Operation(){
    if(this.videoGame.title==""||
    this.videoGame.backGround==""||
    this.videoGame.year==undefined||
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

    if(this.method!="Edit")
    this.HttpServiceService.PostGame(this.videoGame).then(f=>{
      alert("New Game Saved Successfully")
    })
    else
      this.HttpServiceService.EditGame(this.videoGame).then(e=>{
        alert("Edit Game Saved Successfully")
      })
  }


}

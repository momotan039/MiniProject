import { AddProductComponent } from './screens/add-product/add-product.component';
import { CartComponent } from './screens/cart/cart.component';
import { GameDetailsComponent } from './screens/game-details/game-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { PS3Component } from './screens/ps3/ps3.component';
import { PS2Component } from './screens/ps2/ps2.component';
import { PS1Component } from './screens/ps1/ps1.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"PS1",component:PS1Component},
  {path:"PS2",component:PS2Component},
  {path:"PS3",component:PS3Component},
  {path:"GameDetails",component:GameDetailsComponent},
  {path:"GameDetails/:name",component:GameDetailsComponent},
  {path:"Cart",component:CartComponent},
  {path:"AddVideoGame",component:AddProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

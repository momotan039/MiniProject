import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './screens/home/home.component';
import { PS2Component } from './screens/ps2/ps2.component';
import { PS3Component } from './screens/ps3/ps3.component';
import { PS1Component } from './screens/ps1/ps1.component';
import { GameDetailsComponent } from './screens/game-details/game-details.component';
import { VideoGameComponent } from './Components/video-game/video-game.component';
import { CartComponent } from './screens/cart/cart.component';
import { AddProductComponent } from './screens/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiDataComponent } from './screens/apiData/api-data/api-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    HomeComponent,
    PS1Component,
    PS2Component,
    PS3Component,
    GameDetailsComponent,
    VideoGameComponent,
    CartComponent,
    AddProductComponent,
    ApiDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

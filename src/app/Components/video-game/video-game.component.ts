import { VideoGame } from 'src/app/model/VideoGame';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.css']
})
export class VideoGameComponent implements OnInit {
  @Input() listVideoGame?:VideoGame[]
  constructor() { }
  ngOnInit(): void {
  }
}

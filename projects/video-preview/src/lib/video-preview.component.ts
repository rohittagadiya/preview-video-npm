import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {

  constructor() { 
    console.log("IN MY LIB");
  }

  ngOnInit(): void {
  }

}

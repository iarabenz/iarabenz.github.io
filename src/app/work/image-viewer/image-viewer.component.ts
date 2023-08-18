import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  @Input() imageSources: string[];

  currentImage: string = "";
  imageCounter: number = 0;

  ngOnInit() {
    this.currentImage = this.imageSources[0];
  }

  previousImage() {
    if (this.imageCounter > 0) {
      this.imageCounter--;
    } else {
      this.imageCounter = this.imageSources.length - 1;
    }
    this.currentImage = this.imageSources[this.imageCounter];
  }

  nextImage() {
    if (this.imageCounter < this.imageSources.length - 1) {
      this.imageCounter++;
    } else {
      this.imageCounter = 0;
    }
    this.currentImage = this.imageSources[this.imageCounter];
  }

}

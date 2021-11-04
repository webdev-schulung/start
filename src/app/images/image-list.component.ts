import { Component } from '@angular/core';
import { ImageService } from "./image.service";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['image-list.component.css']
})
export class ImageListComponent {

  constructor(private imageService: ImageService) { }

  get = () => this.imageService?.getUrls();

  remove(index: number) {
    this.imageService.remove(index);
  }

}

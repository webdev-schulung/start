import { Component } from '@angular/core';
import { ImageService } from "./image.service";

@Component({
  selector: 'app-image-display',
  template: '<img [src]="get()" alt="Not found">',
  styleUrls: ['./images.component.css']
})
export class ImageDisplayComponent {

  constructor(private imageService: ImageService) { }

  get = () => this. imageService?.getUrl();

}

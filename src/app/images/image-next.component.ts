import { Component } from '@angular/core';
import {ImageService} from "./image.service";

@Component({
  selector: 'app-image-next',
  template: '<button class="btn btn-primary" (click)="change()">Next Image</button>'
})
export class ImageNextComponent {

  constructor(private imageService: ImageService) { }

  change = () => this.imageService.next();

}

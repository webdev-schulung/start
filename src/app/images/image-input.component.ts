import { Component } from '@angular/core';
import { ImageService } from "./image.service";

@Component({
  selector: 'app-image-input',
  template: '<input type="text" class="form-control" (input)="add($event)" [placeholder]="placeholder">',
  styleUrls: ['./images.component.css']
})
export class ImageInputComponent {

  readonly placeholder: string = "Enter new image Url (must be jpg)";

  constructor(private imageService: ImageService) { }

  add = (event: Event) => this.imageService.add((<HTMLInputElement>event.target).value);

}

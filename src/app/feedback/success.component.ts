import { Component } from '@angular/core'
import {ImageService} from "../images/image.service"

@Component({
  selector: 'app-success',
  template: '<p *ngIf="imageService.getStatus() === \'success\'">success</p>',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor(public imageService: ImageService) { }

}

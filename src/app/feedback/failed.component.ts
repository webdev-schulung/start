import { Component } from '@angular/core';
import {ImageService} from "../images/image.service";

@Component({
  selector: 'app-failed',
  template: '<p *ngIf="imageService.getStatus() === \'failed\'">failed</p>',
  styleUrls: ['./failed.component.css']
})
export class FailedComponent {

  constructor(public imageService: ImageService) { }

}

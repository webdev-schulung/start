import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { FailedComponent } from './feedback/failed.component';
import { SuccessComponent } from './feedback/success.component';
import {FormsModule} from "@angular/forms";
import { ImageInputComponent } from './images/image-input.component';
import { ImageListComponent } from './images/image-list.component';
import { ImageNextComponent } from './images/image-next.component';
import { ImageDisplayComponent } from './images/image-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    FailedComponent,
    SuccessComponent,
    ImageInputComponent,
    ImageListComponent,
    ImageNextComponent,
    ImageDisplayComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

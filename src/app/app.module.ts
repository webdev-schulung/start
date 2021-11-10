import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ImagesComponent } from './images/images.component'
import { FailedComponent } from './feedback/failed.component'
import { SuccessComponent } from './feedback/success.component'
import { FormsModule } from "@angular/forms"
import { ImageInputComponent } from './images/image-input.component'
import { ImageListComponent } from './images/image-list.component'
import { ImageNextComponent } from './images/image-next.component'
import { ImageDisplayComponent } from './images/image-display.component'
import { HttpClientModule } from "@angular/common/http"
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'image', component: ImageDisplayComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    FailedComponent,
    SuccessComponent,
    ImageInputComponent,
    ImageListComponent,
    ImageNextComponent,
    ImageDisplayComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

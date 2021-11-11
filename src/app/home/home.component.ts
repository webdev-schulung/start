import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public chuck: string = ''
  public image: string = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<any>('https://api.chucknorris.io/jokes/random')
      .subscribe(data => {
        this.chuck = data?.value
        this.image = data?.icon_url
      })
  }

}

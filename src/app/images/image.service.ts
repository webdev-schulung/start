import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private timerHandleOn: number = 0;
  private timerHandleOff: number = 0;
  private status: string = "";
  private pointer: number = 0;
  private urls: Array<string> = [
    "https://cdn.pixabay.com/photo/2020/09/19/19/37/landscape-5585247_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_1280.jpg"
  ];

  next = () => this.pointer = ++this.pointer % this.urls.length;
  remove = (index: number) => this.urls.splice(index, 1);
  getUrl = () => this.urls[this.pointer];
  getUrls = () => this.urls;
  getStatus = () => this.status;

  add(url: string) {
    if(url.endsWith("jpg")) {
      this.urls.push(url);
      this.setStatus("success")
    } else if(url.length == 0) {
      this.setStatus("")
    } else {
      this.setStatus("failed")
    }
  }

  private setStatus(status: string) {
    this.status = "";
    clearTimeout(this.timerHandleOn);
    clearTimeout(this.timerHandleOff);
    this.timerHandleOn = setTimeout(() => this.status = status, 500)
    this.timerHandleOff = setTimeout(() => this.status = "", 2000)
  }

}

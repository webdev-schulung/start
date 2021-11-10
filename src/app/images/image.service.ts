import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private timerHandleOn: number = 0
  private timerHandleOff: number = 0
  private status: string = ""
  private pointer: number = 0
  private urls: Array<string> = []

  constructor(private http: HttpClient) {
    this.restore()
  }

  next = () => this.pointer = ++this.pointer % this.urls.length
  getUrl = () => this.urls[this.pointer]
  getUrls = () => this.urls
  getStatus = () => this.status

  add(url: string) {
    if(url.endsWith("jpg")) {
      this.urls.push(url);
      this.store();
      this.setStatus("success")
    } else if(url.length == 0) {
      this.setStatus("")
    } else {
      this.setStatus("failed")
    }
  }

  private setStatus(status: string) {
    this.status = ""
    clearTimeout(this.timerHandleOn)
    clearTimeout(this.timerHandleOff)
    this.timerHandleOn = setTimeout(() => this.status = status, 500)
    this.timerHandleOff = setTimeout(() => this.status = "", 2000)
  }

  remove = (index: number) => {
    this.urls.splice(index, 1)
    this.store()
  }

  private restore() {
    this.http
      .get<any>('http://localhost:8081')
      .subscribe(data => this.urls = data)
  }

  private store() {
    console.log(this.urls)
    this.http
      .post<any>('http://localhost:8081/set', this.urls)
      .subscribe({
        next: data => console.log(data),
        error: error => console.error('There was an error!', error)
      })
  }

}

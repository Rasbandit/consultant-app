import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
private _url = "http://jsonplaceholder.typicode.com/posts"
  getPosts() {
    return this._http.get()
      .map(res => res.json(this._url));
  }

  createPost(post){
    return this._http.post(this._url, JSON.stringify(post))
      .map(res => res.json());
  }

  constructor(private _http: Http) {
    
   }

}

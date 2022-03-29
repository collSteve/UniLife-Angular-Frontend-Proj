import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostOrderByValue, PostModel, PostType } from '../models/post-models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPostsByType(postType: PostType, callback:(arg1:PostModel[])=>void, orderBy?:PostOrderByValue, asc?:boolean){
    let apiURL = `${environment.server_base_URL}/api/posts/type/${postType}?orderBy=${orderBy??0}&asc=${asc??false}`;
    this.httpClient.get<PostModel[]>(apiURL)
    .subscribe((posts)=>{
      callback(JSON.parse(JSON.stringify(posts)));
    });
  }

  getPostByPid(pid:number, callback:(arg1:PostModel)=>void) {
    let apiURL = `${environment.server_base_URL}/api/posts/${pid}`;
    this.httpClient.get<PostModel>(apiURL)
    .subscribe((posts)=>{
      callback(JSON.parse(JSON.stringify(posts)));
    });
  }
}

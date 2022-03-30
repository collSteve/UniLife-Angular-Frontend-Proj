import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostOrderByValue, PostModel, PostType, CommentModel, PostCreateRequestObject, UpdatePostPutRequestObject } from '../models/post-models';
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

  getCommentsByPid(pid: number, callback:(arg1:CommentModel[])=>void) {
    let apiURL = `${environment.server_base_URL}/api/posts/comments/${pid}`;
    this.httpClient.get<CommentModel[]>(apiURL)
    .subscribe((comments)=>{
      callback(JSON.parse(JSON.stringify(comments)));
    });
  }

  createPost(createRequest: PostCreateRequestObject, callback:(arg:boolean)=>void) {
    let apiURL = `${environment.server_base_URL}/api/posts`;
    this.httpClient.post(apiURL, createRequest).subscribe(()=>{
      callback(true);
    });
  }

  determinePostType(pid:number, callback:(arg:PostType)=>void) {
    let apiURL = `${environment.server_base_URL}/api/posts/postType/${pid}`;

    this.httpClient.get<string>(apiURL, {responseType: 'text' as 'json'}).subscribe((postType)=>{
      console.log("PostType"+postType);
      callback(postType as PostType);
    });
  }

  updatePost(updateRequest:UpdatePostPutRequestObject, callback:(arg:boolean)=>void) {
    let apiURL = `${environment.server_base_URL}/api/posts`;

    this.httpClient.put(apiURL, updateRequest).subscribe(()=>{
      callback(true);
    });
  }

  deletePost(pid:number, callback:(arg:boolean)=>void) {
    let apiURL = `${environment.server_base_URL}/api/posts`;

    this.httpClient.delete(apiURL, {body:pid}).subscribe(()=>{
      callback(true);
    });
  }
}

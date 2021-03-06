import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostOrderByValue, PostModel, PostType, CommentModel, PostCreateRequestObject, UpdatePostPutRequestObject, CreateCommentPostRequest, UniverityNumPostGetRequestObject } from '../models/post-models';
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

  getPostsBySearchTitle(postType: PostType, title:string, callback:(arg1:PostModel[])=>void, orderBy?:PostOrderByValue, asc?:boolean){
    let apiURL = `${environment.server_base_URL}/api/posts/SerachTitle/${postType}?title=${title}&orderBy=${orderBy??0}&asc=${asc??false}`;
    this.httpClient.get<PostModel[]>(apiURL)
    .subscribe((posts)=>{
      callback(JSON.parse(JSON.stringify(posts)));
    });
  }

  getPostByCategories(postType: PostType, categories: string[],
    callback:(arg1:PostModel[])=>void, orderBy?:PostOrderByValue, asc?:boolean) {
    let cateQuery:string = "";
    categories.forEach((v)=>{
      cateQuery+=`&category=${v}`;
    });
    // remove space
    cateQuery.replace(/\s/g, '');

    let apiURL = `${environment.server_base_URL}/api/posts/Categories?postType=${postType}${cateQuery}&orderBy=${orderBy??0}&asc=${asc??false}`;
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

  createComment(pid:number, creatorUid:number, commentBody:string, callback:(arg:boolean)=>void) {
    let apiURL = `${environment.server_base_URL}/api/posts/comment`;

    const createCommentRequat: CreateCommentPostRequest = {
      pid: pid,
      creatorUid: creatorUid,
      commentBody: commentBody
    };

    this.httpClient.post(apiURL, createCommentRequat).subscribe(()=>{
      callback(true);
    });
  }

  deleteComment(cid:number, callback:(arg:boolean)=>void) {
    let apiURL = `${environment.server_base_URL}/api/posts/comment`;

    this.httpClient.delete(apiURL, {body:cid}).subscribe(()=>{
      callback(true);
    });
  }

  getNumberPostsByUniversity(callback:(arg:UniverityNumPostGetRequestObject[])=>void){
    let apiURL = `${environment.server_base_URL}/api/posts/Count/University`;
    this.httpClient.get<UniverityNumPostGetRequestObject[]>(apiURL)
    .subscribe((uniPostsCount:UniverityNumPostGetRequestObject[])=>{
      callback(JSON.parse(JSON.stringify(uniPostsCount)));
    });
  }

  getNumberPostsByCategories(postType:string, categories: string[], callback:(arg:number)=>void) {
    let cateQuery:string = "";
    categories.forEach((v)=>{
      cateQuery+=`&category=${v}`;
    });
    // remove space
    cateQuery.replace(/\s/g, '');

    let apiURL = `${environment.server_base_URL}/api/Posts/Count/Category?postType=${postType}${cateQuery}`;

    this.httpClient.get<number>(apiURL, {responseType: 'number' as 'json'})
    .subscribe((num: number)=>{
      callback(num);
    });
  }

  getGroupPosts(gid: number,
    callback: (arg1: PostModel[]) => void, orderBy?: PostOrderByValue, asc?: boolean) {

    let apiURL = `${environment.server_base_URL}/api/Group/Posts/${gid}`;
    this.httpClient.get<PostModel[]>(apiURL)
      .subscribe((posts) => {
        callback(JSON.parse(JSON.stringify(posts)));
      });
  }

  
}

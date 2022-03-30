import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostCreateRequestObject, PostType } from '../models/post-models';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css']
})
export class CreatePostPageComponent implements OnInit {

  creationPostType: PostType = PostType.SocialMediaPost;
  mode:string = "create";

  postCreationValues: PostCreateRequestObject = {
    postTitle: "",
    postBody: "",
    createDate: new Date(),
    creatorUID: 2,
    PostType: PostType.SocialMediaPost,
    email:undefined,
    phoneNumber:undefined,
    address:undefined
  }

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
  }

  public get postTypeEnum(): typeof PostType {
    return PostType;
  }

  onSubmitClicked(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postCreationValues.postTitle = form.value.title;
    this.postCreationValues.postBody = form.value.description;
    this.postCreationValues.createDate = new Date();
    this.postCreationValues.email = form.value.email;
    this.postCreationValues.phoneNumber = form.value.phoneNum;
    this.postCreationValues.address = form.value.address;

    const createRequest: PostCreateRequestObject = JSON.parse(JSON.stringify(this.postCreationValues));

    if (this.mode === "create") {
      const postRequest = this.postsService.createPost(createRequest, ()=>{console.log("success")});
      
    }
  }

}

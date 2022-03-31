import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PostCreateRequestObject, PostModifyData, PostModifyType, PostType, UpdatePostPutRequestObject } from '../models/post-models';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css']
})
export class CreatePostPageComponent implements OnInit {

  pageTitle: string = "";

  creationPostType: PostType = PostType.SocialMediaPost;

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

  postModifyData: PostModifyData = {modifyType:PostModifyType.Create};

  constructor(private postsService: PostService, private route: ActivatedRoute, private router: Router, private location:Location) { }

  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      this.postModifyData.modifyType = (data as PostModifyData).modifyType;

      if (this.postModifyData.modifyType == PostModifyType.Edit) {
        this.route.params.subscribe((params: Params) => {
          this.postModifyData.pid = Number(params['postid']);

          // determin post type
          this.postsService.determinePostType(this.postModifyData.pid, (postType)=>{this.postCreationValues.PostType = postType;});
          this.postsService.getPostByPid(this.postModifyData.pid, (post)=>{
            this.postCreationValues.postTitle = post.title;
            this.postCreationValues.postBody = post.postBody;
            this.postCreationValues.createDate = post.createdDate;
            this.postCreationValues.creatorUID = post.creatorAid;
            this.postCreationValues.email = post.email;
            this.postCreationValues.phoneNumber = Number(post.phoneNum);
            this.postCreationValues.address = post.address;

          });
        });
      }

      console.log(this.postModifyData);
      this.updatePageTitle();
    });

  }

  updatePageTitle() {
    this.pageTitle =  this.postModifyData.modifyType == PostModifyType.Create ? "Create a Post": "Update a Post";
  }

  public get postTypeEnum(): typeof PostType {
    return PostType;
  }

  public get postModifyTypeEnum(): typeof PostModifyType {
    return PostModifyType;
  }

  onSubmitClicked(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postCreationValues.postTitle = form.value.title;
    this.postCreationValues.postBody = form.value.description;
    this.postCreationValues.email = form.value.email;
    this.postCreationValues.phoneNumber = form.value.phoneNum;
    this.postCreationValues.address = form.value.address;

    const createRequest: PostCreateRequestObject = JSON.parse(JSON.stringify(this.postCreationValues));

    if (this.postModifyData.modifyType === PostModifyType.Create) {
      createRequest.createDate = new Date();
      this.postsService.createPost(createRequest, ()=>{console.log("success")});
      this.router.navigate(['/posts-page']);
    }
    else if (this.postModifyData.modifyType === PostModifyType.Edit) {
      const updateRequest: UpdatePostPutRequestObject = {
        pid:this.postModifyData.pid as number,
        postTitle: createRequest.postTitle,
        postBody: createRequest.postBody,
        email: createRequest.email,
        phoneNumber: String(createRequest.phoneNumber),
        address: createRequest.address
      }

      this.postsService.updatePost(updateRequest, (arg)=>{console.log("success")});

      this.router.navigate(['/post', updateRequest.pid]);
    }
  }

}

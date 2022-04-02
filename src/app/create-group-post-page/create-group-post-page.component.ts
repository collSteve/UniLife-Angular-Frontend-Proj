import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PostCreateRequestObject, PostModifyData, PostModifyType, PostType, UpdatePostPutRequestObject } from '../models/post-models';
import { PostService } from '../services/post-service.service';
import { PostModel, PostOrderByValue, UserPostInfo } from '../models/post-models';
import { GroupModel, GroupNewObj, JoinGroupReq, newGroupPost } from '../models/group-model';
import { GroupService } from '../services/group-service.service'

@Component({
  selector: 'app-create-group-post-page',
  templateUrl: './create-group-post-page.component.html',
  styleUrls: ['./create-group-post-page.component.css']
})
export class CreateGroupPostPageComponent implements OnInit {

  datep = new Date();

  namep = new String;

  go: boolean = false;

  pageTitle: string = "";

  creationPostType: PostType = PostType.SocialMediaPost;

  postCreationValues: PostCreateRequestObject = {
    postTitle: "",
    postBody: "",
    createDate: new Date(),
    creatorUID: 2,
    PostType: PostType.SocialMediaPost,
    email: undefined,
    phoneNumber: undefined,
    address: undefined
  }

  newsGroupPost: newGroupPost = {
    gid:0,
    pid:0,
  }

  postModifyData: PostModifyData = { modifyType: PostModifyType.Create };

  constructor(private postsService: PostService, private route: ActivatedRoute, private router: Router, private location: Location, private groupService: GroupService) { }

  Posts: (PostModel & UserPostInfo)[] = [
    {
      pid: -1, title: "Steve's Sample Post", postBody: "I want to sell my pepper...", creatorName: "Steve",
      createdDate: new Date(2002, 6, 27), numLikes: 666, numDislikes: 0, likedByMe: false, dislikedByMe: false,
      thum_nail_img: "https://www.spicejungle.com/wp/files/2016/10/where-does-black-pepper-come-from.jpg", creatorAid: 1001
    },
    {
      pid: -2, title: "Dog's Sample Post", postBody: "Wof wof bark bark", creatorName: "The Dog",
      createdDate: new Date(1997, 10, 7), numLikes: 243, numDislikes: 23, likedByMe: false, dislikedByMe: false, creatorAid: 2
    },
  ];

  getPostsAndUpdate(ptitle: string, postType: PostType, date?: Date, orderBy?: PostOrderByValue, asc?: boolean) {
    this.postsService.getPostsBySearchTitle(postType, ptitle,
      (post) => this.updatePostsList(post), orderBy, asc);
  }


  ngOnInit(): void {
    this.getPostsAndUpdate("newb post", PostType.SocialMediaPost);
    this.route.data.subscribe((data) => {
      this.postModifyData.modifyType = (data as PostModifyData).modifyType;

      if (this.postModifyData.modifyType == PostModifyType.Edit) {
        this.route.params.subscribe((params: Params) => {
          this.postModifyData.pid = Number(params['postid']);

          // determin post type
          this.postsService.determinePostType(this.postModifyData.pid, (postType) => { this.postCreationValues.PostType = postType; });
          this.postsService.getPostByPid(this.postModifyData.pid, (post) => {
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
    this.pageTitle = this.postModifyData.modifyType == PostModifyType.Create ? "Create a Post" : "Update a Post";
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
      this.postsService.createPost(createRequest, () => {
        this.getPostsAndUpdate(this.postCreationValues.postTitle,
          <PostType>this.postCreationValues.PostType, createRequest.createDate, 0, false);
      });
      this.datep = createRequest.createDate;
      this.namep = this.postCreationValues.postTitle;
      this.go = true;
    }
    else if (this.postModifyData.modifyType === PostModifyType.Edit) {
      const updateRequest: UpdatePostPutRequestObject = {
        pid: this.postModifyData.pid as number,
        postTitle: createRequest.postTitle,
        postBody: createRequest.postBody,
        email: createRequest.email,
        phoneNumber: String(createRequest.phoneNumber),
        address: createRequest.address
      }
      

      this.postsService.updatePost(updateRequest, (arg) => { console.log("successxd") });
      
      this.router.navigate(['/post', updateRequest.pid]);
    }
  }


  updatePostsList(posts: PostModel[]) {
    console.log("running :)");
    this.Posts = [];
    posts.forEach((post: PostModel) => {
      this.Posts.push({ ...post, likedByMe: false, dislikedByMe: false });
    });

    this.checkDate();
  }

  checkDate() {
    if (this.go) {
      console.log(window.location.pathname.indexOf('c') - 1);
      console.log(window.location.pathname);
      var n = window.location.pathname.indexOf('c') - 1;
        var x = window.location.pathname.substring(7, n);
        var y: number = +x;
        console.log(y);

        this.newsGroupPost.gid = y;
        this.newsGroupPost.pid = this.Posts[0].pid;

        const createrRequest: newGroupPost = JSON.parse(JSON.stringify(this.newsGroupPost));

        this.groupService.createGroupPost(createrRequest, (arg) => { console.log("Group post created!") });

      this.router.navigate(['/posts-page']);
    }
  }
 

}

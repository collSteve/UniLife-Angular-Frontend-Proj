import { Component, OnInit } from '@angular/core';
import { GroupModel, GroupNewObj, JoinGroupReq } from '../models/group-model';
import { GroupService } from '../services/group-service.service'
import { PostOrderByValue, PostModel, PostType, CommentModel, PostCreateRequestObject, UpdatePostPutRequestObject, UserPostInfo } from '../models/post-models';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-individual-group-page',
  templateUrl: './individual-group-page.component.html',
  styleUrls: ['./individual-group-page.component.css']
})
export class IndividualGroupPageComponent implements OnInit {

  constructor(private groupService: GroupService, private postsService: PostService) { }

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


  ngOnInit(): void {
    this.getPostsAndUpdate();
    //this.getMembersAndUpdate();
  }

  getPostsAndUpdate() {
    this.postsService.getPostsByType(PostType.SellingPost, (post) => this.updatePostsList(post));
  }


  updatePostsList(posts: PostModel[]) {
    this.Posts = [];
    posts.forEach((group: PostModel) => {
      this.Posts.push({ ...group, likedByMe: false, dislikedByMe: false });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; // format date
import { CommentModel, UIPost } from '../models/post-models';
import { PostModel, UserPostInfo } from '../models/post-models';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-individual-post-page',
  templateUrl: './individual-post-page.component.html',
  styleUrls: ['./individual-post-page.component.css']
})
export class IndividualPostPageComponent implements OnInit {

  datepipe: DatePipe = new DatePipe('en-US'); // format dates

  myPost: PostModel & UserPostInfo = {pid:-1,title: "Steve's Sample Post", postBody: "I want to sell my pepper...", creatorName: "Steve",
  createdDate: new Date(2002,6,27), numLikes:666, numDislikes: 0, likedByMe: false, dislikedByMe:false,
  thum_nail_img: "https://www.spicejungle.com/wp/files/2016/10/where-does-black-pepper-come-from.jpg", creatorAid:1001
  };

  comments: CommentModel[] = [
    {cid:123, pid: 2132, commentBody: "Lol Funny Comments", creatorName:"Seve", creatorUid:1231}
  ]
  constructor(private postsService: PostService, private route: ActivatedRoute) { }

  pid:number = -999;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.pid = Number(params['postid']);
    });

    this.getPostandUpdateDisplay(this.pid);
    this.getCommentsanUpdateDisplay(this.pid);
  }

  getPostandUpdateDisplay(pid: number) {
    this.postsService.getPostByPid(pid, (post)=>this.updatePostDisplay(post));
  }

  updatePostDisplay(post: PostModel) {
    this.myPost = {...post, likedByMe: false, dislikedByMe: false};
  }

  getCommentsanUpdateDisplay(pid:number) {
    this.postsService.getCommentsByPid(pid, (comments)=>this.updateCommentsDisplay(comments));
  }

  updateCommentsDisplay(comments: CommentModel[]) {
    this.comments = [];
    comments.forEach((comment:CommentModel)=>{
      this.comments.push({...comment});
    });
  }


  onClickLike(post: PostModel&UserPostInfo) {
    if (post.likedByMe) {
      post.likedByMe = false;
    }
    else {
      post.likedByMe = true;
      post.dislikedByMe = false;
    }
  }

  onClickDisike(post: PostModel&UserPostInfo) {
    if (post.dislikedByMe) {
      post.dislikedByMe = false;
    }
    else {
      post.likedByMe = false;
      post.dislikedByMe = true;
    }
  }
}

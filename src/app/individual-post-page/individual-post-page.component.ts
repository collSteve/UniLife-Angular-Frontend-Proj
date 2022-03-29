import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; // format date
import { Post, UserPostInfo } from '../app.model';

@Component({
  selector: 'app-individual-post-page',
  templateUrl: './individual-post-page.component.html',
  styleUrls: ['./individual-post-page.component.css']
})
export class IndividualPostPageComponent implements OnInit {

  datepipe: DatePipe = new DatePipe('en-US'); // format dates

  myPost: Post & UserPostInfo = {pid:-1,title: "Steve's Sample Post", description: "I want to sell my pepper...", creator: "Steve",
  create_date: new Date(2002,6,27), num_likes:666, num_dislikes: 0, likedByMe: false, dislikedByMe:false,
  thum_nail_img: "https://www.spicejungle.com/wp/files/2016/10/where-does-black-pepper-come-from.jpg"
  };

  constructor() { }

  ngOnInit(): void {
  }


  onClickLike(post: Post&UserPostInfo) {
    if (post.likedByMe) {
      post.likedByMe = false;
    }
    else {
      post.likedByMe = true;
      post.dislikedByMe = false;
    }
  }

  onClickDisike(post: Post&UserPostInfo) {
    if (post.dislikedByMe) {
      post.dislikedByMe = false;
    }
    else {
      post.likedByMe = false;
      post.dislikedByMe = true;
    }
  }
}

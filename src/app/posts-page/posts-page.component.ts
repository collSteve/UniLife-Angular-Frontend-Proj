import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; // format date
import { Post, UserPostInfo } from '../app.model';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US'); // format dates

  Posts: (Post & UserPostInfo)[] = [
    {pid:-1,title: "Steve's Sample Post", description: "I want to sell my pepper...", creator: "Steve",
    create_date: new Date(2002,6,27), num_likes:666, num_dislikes: 0, likedByMe: false, dislikedByMe:false,
    thum_nail_img: "https://www.spicejungle.com/wp/files/2016/10/where-does-black-pepper-come-from.jpg"
    },
    {pid:-2,title: "Dog's Sample Post", description: "Wof wof bark bark", creator: "The Dog",
    create_date: new Date(1997,10,7), num_likes:243, num_dislikes: 23, likedByMe: false, dislikedByMe:false},
  ];

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

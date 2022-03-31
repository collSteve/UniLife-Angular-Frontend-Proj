import { Component, OnInit } from '@angular/core';
import { UniverityNumPostGetRequestObject } from '../models/post-models';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-university-post-number-page',
  templateUrl: './university-post-number-page.component.html',
  styleUrls: ['./university-post-number-page.component.css']
})
export class UniversityPostNumberPageComponent implements OnInit {

  displayedColumns: string[] = ['university', 'postCount'];

  universityPostCountList: UniverityNumPostGetRequestObject[] =[
    {universityName:"UBC", numberOfPosts: 666}
  ];

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.getandUpdateDisplay();
  }

  getandUpdateDisplay() {
    this.postsService.getNumberPostsByUniversity((uniPostsCount)=>{
      this.universityPostCountList = uniPostsCount;
    });
  }

}

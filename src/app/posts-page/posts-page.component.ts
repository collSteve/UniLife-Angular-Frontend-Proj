import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; // format date
// import { Post } from '../app.model';
import { PostService } from '../services/post-service.service';
import { PostModel, PostOrderByValue, PostType, UserPostInfo, PostModifyType } from '../models/post-models';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

enum QueryType{
    Simple = 0,
    Search = 1,
    FilterByCategories = 2
}

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  datepipe: DatePipe = new DatePipe('en-US'); // format dates

  postTypes: PostType[] = [
    PostType.SellingPost,
    PostType.HousingPost,
    PostType.SocialMediaPost
  ];

  orderBys: ({ postOrder?: PostOrderByValue, display: string })[] = [
    { postOrder: PostOrderByValue.CreatedDate, display: "Order by Creation Date" },
    { postOrder: PostOrderByValue.Title, display: "Order By Title" },
    { postOrder: undefined, display: "Default Order" }
  ];


  panelBindedValues: {postType:PostType, postOrderBy:PostOrderByValue|undefined,
                      orderIsAsc:boolean, categories:string[], queryType: QueryType,
                      searchBarValue:string} = {
    postType:PostType.SellingPost,
    postOrderBy: undefined,
    orderIsAsc: false,
    searchBarValue:"",
    categories:[],
    queryType: QueryType.Simple
  };

  dbNumPostsDisplay:string = 'NaN';

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

  constructor(private postsService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.getPostsAndUpdate(PostType.SellingPost);
  }

  public get postModifyTypeEnum(): typeof PostModifyType {
    return PostModifyType;
  }

  getPostsAndUpdate(postType: PostType, orderBy?:PostOrderByValue, asc?:boolean) {
    if (this.panelBindedValues.queryType === QueryType.Simple) {
      this.postsService.getPostsByType(postType,(post)=>this.updatePostsList(post), orderBy, asc);
    }
    else if (this.panelBindedValues.queryType === QueryType.Search) {
      if (this.panelBindedValues.searchBarValue)
        this.postsService.getPostsBySearchTitle(postType, this.panelBindedValues.searchBarValue,
          (post)=>this.updatePostsList(post), orderBy, asc);
    }
    else if (this.panelBindedValues.queryType === QueryType.FilterByCategories) {
      if (this.panelBindedValues.categories.length > 0)
        this.postsService.getPostByCategories(postType, this.panelBindedValues.categories,
          (post)=>this.updatePostsList(post), orderBy, asc);
    }
    this.getandUpdateDbNumberPosts();
  }

  updatePostsList(posts: PostModel[]) {
    this.Posts = [];
    posts.forEach((post: PostModel) => {
      this.Posts.push({ ...post, likedByMe: false, dislikedByMe: false });
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

  onClickPanelSubmit() {
    console.log(this.Posts);
    this.getPostsAndUpdate(this.panelBindedValues.postType,
      this.panelBindedValues.postOrderBy,
      this.panelBindedValues.orderIsAsc);
  }

  addCategory(category:string) {
    if (category) this.panelBindedValues.categories.push(category);
  }

  removeCategory(category:string) {
    for( let i = 0; i < this.panelBindedValues.categories.length; i++){

      if ( this.panelBindedValues.categories[i] === category) {
        this.panelBindedValues.categories.splice(i, 1);
      }

    }
  }

  onClickEdit(pid:number) {
    this.router.navigate(['/editPost', pid]);
  }

  onClickDelete(pid:number) {
    this.postsService.deletePost(pid, (arg)=>{console.log("delete post success")});
    window.location.reload();
  }

  onQueryPanelTabChange(index:number) {
    this.panelBindedValues.queryType = index;
  }

  getandUpdateDbNumberPosts() {
    if (this.panelBindedValues.queryType === QueryType.Simple) {
      this.postsService.getNumberPostsByCategories(this.panelBindedValues.postType,
        [], (arg)=>{this.dbNumPostsDisplay=String(arg)});
    }
    else if (this.panelBindedValues.queryType === QueryType.FilterByCategories) {
      this.postsService.getNumberPostsByCategories(this.panelBindedValues.postType,
        this.panelBindedValues.categories, (arg)=>{this.dbNumPostsDisplay=String(arg)});
    }
    else {
      this.dbNumPostsDisplay = "Not supported in current query mode";
    }

  }
}


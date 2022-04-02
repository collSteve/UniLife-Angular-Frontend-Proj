import { Component, OnInit } from '@angular/core';
import { GroupModel, GroupNewObj, JoinGroupReq, changeNameObj } from '../models/group-model';
import { Router } from '@angular/router';
import { GroupService } from '../services/group-service.service'
import { PostOrderByValue, PostModel, PostType, CommentModel, PostCreateRequestObject, UpdatePostPutRequestObject, UserPostInfo } from '../models/post-models';
import { PostService } from '../services/post-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-individual-group-page',
  templateUrl: './individual-group-page.component.html',
  styleUrls: ['./individual-group-page.component.css']
})
export class IndividualGroupPageComponent implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US');

  constructor(private groupService: GroupService, private postsService: PostService, private router: Router) { }

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

  pressed:boolean = false;

  Groups: (GroupModel)[] = [
    {
      gid: 1, groupName: "Group 1"
    },
    {
      gid: 2, groupName: "Group 2"
    },
  ];

  nameC: changeNameObj = {
    name: "",
    gid: 0,
  }

  ngOnInit(): void {
    this.getPostsAndUpdate();
    //this.getMembersAndUpdate();
    this.getGroupsAndUpdate();
    console.log(window.location.pathname.substring(7));
  }

  getGroupsAndUpdate() {
    var x = window.location.pathname.substring(7);
    var y: number = +x;
    this.groupService.getGroupInfo(y, (group) => this.updateGroupsList(group));
  }

  getPostsAndUpdate() {
    var x = window.location.pathname.substring(7);
    var y: number = +x;
    this.postsService.getGroupPosts(y, (post) => this.updatePostsList(post));
  }

  updateGroupsList(groups: GroupModel[]) {
    this.Groups = [];
    groups.forEach((group: GroupModel) => {
      this.Groups.push({ ...group});
    });
  }

  updatePostsList(posts: PostModel[]) {
    this.Posts = [];
    posts.forEach((group: PostModel) => {
      this.Posts.push({ ...group, likedByMe: false, dislikedByMe: false });
    });
  }

  changeName() {
    var name = <HTMLElement>document.querySelector("#GroupName");
    name.contentEditable = "true";
    
    if (this.pressed) {
      const newName = <HTMLHeadElement>document.querySelector("#GroupName");

      if (newName.innerHTML != "") {
        var x = window.location.pathname.substring(7);
        var y: number = +x;
        console.log(newName.innerHTML + "" + y)
        this.nameC.name = newName.innerHTML;
        this.nameC.gid = y;

        const createrRequest: changeNameObj = JSON.parse(JSON.stringify(this.nameC));

        this.groupService.changeName(createrRequest, (arg) => { console.log("Name Changed!") });
        newName.contentEditable = "false";
        this.pressed = false;
      }
    } else {
      this.pressed = true;
    }
    
      
  
  }

}

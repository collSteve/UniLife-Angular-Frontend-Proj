import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupModel, GroupNewObj,JoinGroupReq } from '../models/group-model';
import { GroupService} from '../services/group-service.service'


@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {

  constructor(private groupService: GroupService, private router: Router) {

  }

  groupJoinValues: JoinGroupReq = {

    aid: 2,
    gid:-1,
    role:"member"
  }

  groupCreateValues: GroupNewObj = {

    aid: 2,
    groupName: "",
  }

  Groups: (GroupModel)[] = [
    {
      gid: 1, groupName: "Group 1"
    },
    {
      gid: 2, groupName: "Group 2"
    },
  ];

  ngOnInit(): void {

    this.getGroupsAndUpdate();

  }

  getGroupsAndUpdate() {
    this.groupService.getGroups((group) => this.updateGroupsList(group));
  }


  updateGroupsList(groups: GroupModel[]) {
    this.Groups = [];
    groups.forEach((group: GroupModel) => {
      this.Groups.push({ ...group});
    });
  }

  clickSearch() {

    const searchName = <HTMLInputElement>document.querySelector(".searchbar");
    if (searchName.value != "") {
      this.groupService.searchGroup(<string>searchName.value, (group) => this.updateGroupsList(group));
    } else {
      this.getGroupsAndUpdate();
    }
  }

  joinGroup(aid: number, name: string, gid: number) {

    this.groupJoinValues.aid = aid;
    this.groupJoinValues.gid = gid;

    const createRequest: JoinGroupReq = JSON.parse(JSON.stringify(this.groupJoinValues));

    console.log(createRequest);

    this.groupService.joinGroup(createRequest, (arg) => { console.log("Group Joined!") });
    this.router.navigate(['/group', gid]);
  }

  createGroup(aid: number) {

    const name = <HTMLInputElement>document.querySelector("#NewGroup");
    if (name.value != "") {
      this.groupCreateValues.aid = aid;
      this.groupCreateValues.groupName = <string>name.value;
      console.log(name.value);

      const createrRequest: GroupNewObj = JSON.parse(JSON.stringify(this.groupCreateValues));

      console.log(createrRequest);

      this.groupService.createGroup(createrRequest, (arg) => {
        console.log("Group Created!");
        this.router.navigate(['/my-groups']);
      });

    }
  }

}

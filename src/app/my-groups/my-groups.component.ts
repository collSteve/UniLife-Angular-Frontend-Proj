import { Component, OnInit } from '@angular/core';
import { GroupModel } from '../models/group-model';
import { GroupService } from '../services/group-service.service'

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  Groups: (GroupModel)[] = [
    {
      gid: 1, groupName: "Group 1"
    },
    {
      gid: 2, groupName: "Group 2"
    },
  ];

  ngOnInit(): void {

    this.getUpdateGroups();
  }

  getUpdateGroups() {
    this.groupService.getMyGroups(2,(group) => this.updateGroupsList(group));
  }

  updateGroupsList(groups: GroupModel[]) {
    this.Groups = [];
    groups.forEach((group: GroupModel) => {
      this.Groups.push({ ...group });
    });
  }

}

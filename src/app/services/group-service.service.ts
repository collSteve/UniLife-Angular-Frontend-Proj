import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupModel, GroupNewObj, JoinGroupReq, changeNameObj, newGroupPost } from '../models/group-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient: HttpClient) { }

  getGroups(callback: (arg1: GroupModel[]) => void) {
    let apiURL = `${environment.server_base_URL}/api/Group`;
    this.httpClient.get<GroupModel[]>(apiURL)
      .subscribe((groups) => {
        callback(JSON.parse(JSON.stringify(groups)));
      });
  }
  searchGroup(name:string, callback: (arg1: GroupModel[]) => void) {
    let apiURL = `${environment.server_base_URL}/api/Group/search/${name}`;
    this.httpClient.get<GroupModel[]>(apiURL)
      .subscribe((groups) => {
        callback(JSON.parse(JSON.stringify(groups)));
      });
  }

  getMyGroups(Aid: number, callback: (arg1: GroupModel[]) => void) {
    let apiURL = `${environment.server_base_URL}/api/Group/myGroups/${Aid}`;
    this.httpClient.get<GroupModel[]>(apiURL)
      .subscribe((groups) => {
        callback(JSON.parse(JSON.stringify(groups)));
      });
  }

  createGroup(createRequest: GroupNewObj, callback: (arg1: boolean) => void) {
    let apiURL = `${environment.server_base_URL}/api/Group`;
    this.httpClient.post(apiURL, createRequest).subscribe(() => {
      callback(true);
    });
  }

  joinGroup(creatRequest: JoinGroupReq, callback: (arg: boolean) => void) {
    let apiURL = `${environment.server_base_URL}/api/Accounts/Group`;
    this.httpClient.put(apiURL, creatRequest).subscribe(() => {
      callback(true);
    });
  }

  getGroupInfo(Gid: number, callback: (arg1: GroupModel[]) => void) {
    let apiURL = `${environment.server_base_URL}/api/Group/Info/${Gid}`;
    this.httpClient.get<GroupModel[]>(apiURL)
      .subscribe((groups) => {
        callback(JSON.parse(JSON.stringify(groups)));
      });
  }

  changeName(cReq: changeNameObj, callback: (arg: boolean) => void) {
    let apiURL = `${environment.server_base_URL}/api/Group`;
    this.httpClient.put(apiURL, cReq).subscribe(() => {
      callback(true);
    });
  }

  createGroupPost(createRequest: newGroupPost, callback: (arg1: boolean) => void) {
    let apiURL = `${environment.server_base_URL}/api/Group/create/GroupPost`;
    this.httpClient.post(apiURL, createRequest).subscribe(() => {
      callback(true);
    });
  }

}

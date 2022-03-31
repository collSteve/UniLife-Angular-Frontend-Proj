import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupModel } from '../models/group-model';
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

}

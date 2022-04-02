import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountCreateRequestObject, AccountUsernameAndEmailRequestObject } from '../models/account-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  createAccount(createRequest: AccountCreateRequestObject, callback:(arg:boolean)=>void) {
    let apiURL = `${environment.server_base_URL}/api/Accounts`;
    this.httpClient.post(apiURL, createRequest).subscribe(()=>{
      callback(true);
    });
  }

  getUsernameAndEmailAccount(callback:(arg:AccountUsernameAndEmailRequestObject[])=>void) {
    let apiURL = `${environment.server_base_URL}/api/Accounts/Username`;
    this.httpClient.get<AccountUsernameAndEmailRequestObject[]>(apiURL)
    .subscribe((usernameandemail:AccountUsernameAndEmailRequestObject[])=>{
      callback(JSON.parse(JSON.stringify(usernameandemail)));
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AccountUsernameAndEmailRequestObject } from '../models/account-model';
import { AccountService } from '../services/account-service.service';

@Component({
  selector: 'app-account-username-list-page',
  templateUrl: './account-username-list-page.component.html',
  styleUrls: ['./account-username-list-page.component.css']
})
export class AccountUsernameListPageComponent implements OnInit {

  displayedColumnsAcc: string[] = ['Username', 'Email'];

  UsernameAndAccountList: AccountUsernameAndEmailRequestObject[] =[
    {Email:"gmail.com", Username: "username"}
  ];
  
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getandUpdateDisplay();
  }

  getandUpdateDisplay() {
    this.accountService.getUsernameAndEmailAccount((usernameandemail)=>{
      this.UsernameAndAccountList = usernameandemail;
    });
  }

}

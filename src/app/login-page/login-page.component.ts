import { Component, OnInit } from '@angular/core';
import { AccountCreateRequestObject, AccountType } from '../models/account-model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginpageTitle: string="";

  creationAccountType: AccountType = AccountType.UserAccount;

  accountCreationValues: AccountCreateRequestObject = {
    Username:"",
    Email:"",
    Password:"",
    AccountType: AccountType.UserAccount
  }

  Username: string="";
  

  constructor() { }

  ngOnInit(): void {
  }

}

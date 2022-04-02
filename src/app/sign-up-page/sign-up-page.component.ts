import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountCreateRequestObject, AccountType } from '../models/account-model';
import { AccountService } from '../services/account-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signupPageTitle: string ="";

  creationAccountType: AccountType = AccountType.UserAccount;

 accountCreationValues: AccountCreateRequestObject = {
    AccountType: AccountType.UserAccount,
    Username: "",
    Email: "",
    Password: ""
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  public get accountTypeEnum(): typeof AccountType {
    return AccountType;
  }
  
  SignUpClicked() {

    const createRequest: AccountCreateRequestObject = JSON.parse(JSON.stringify(this.accountCreationValues));
    
    this.accountService.createAccount(createRequest, ()=>{console.log("success")});
    this.router.navigate(['/posts-page']);
  }
}

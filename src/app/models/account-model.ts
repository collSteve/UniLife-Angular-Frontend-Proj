export enum AccountType {
    AdminAccount = "AdminAccount",
    BusinessAccount = "BusinessAccount",
    UserAccount = "UserAccount"
};

export type AccountModel = {
    aid: number,
    username: string, 
    email: string,
    password: string
};

export type AccountCreateRequestObject = {
    AccountType: string,
    Username: string,
    Email: string,
    Password: string
};

export type AccountUsernameAndEmailRequestObject = {
    email: string,
    username: string
}
export enum AccountType {
    AdminAccount = "AdminAccount",
    BusinessAccount = "BusinessAccount",
    UserAccount = "UserAccount"
};

export type AccountModel = {
    aid: number,
    email: string,
    username: string, 
    password: string
};

export type AccountCreateRequestObject = {
    AccountType: string,
    Email: string,
    Username: string,
    Password: string
};

export type AccountUsernameAndEmailRequestObject = {
    email: string,
    username: string
}
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
}

export type accountCreateRequestObject = {
    AccountType: string,
    accountusername: string,
    accountemail: string,
    accountpassword: string
}
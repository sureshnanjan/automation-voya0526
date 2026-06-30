export interface SignInOperations{
    getStatusMessage():Promise<string>
    doLogin(uname:string, pwd:string):
}
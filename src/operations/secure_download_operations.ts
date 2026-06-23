export interface SecureDownloadOperations{
    getTitle():Promise<string>;
    doLogin(uname:string,pwd:string):Promise<void>;
    downloadFiles(filelist:string[]):Promise<void>;
    getDownloadedFiles():Promise<string[]>;
    clearDownloads():Promise<void>
}
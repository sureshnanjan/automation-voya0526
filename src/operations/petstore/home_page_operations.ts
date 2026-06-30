export interface PSHomePageCommonOperations
{
doSearch(searchTerm:string):Promise<string[]>;
accessCart():Promise<void>
getTopLevelCategories(): Promise<string[]>
getLeftCategories(): Promise<string[]>
getCenterImage():Promise<string[]>
}

export interface PSGuestHomePageOperations extends PSHomePageCommonOperations{
    
    accessLogin():Promise<void>
    

}

export interface PSLoggedUserHomePageOperations extends PSHomePageCommonOperations{
    
    LogOut():Promise<void>
    getWelcomeMessage():Promise<string>
    accessAccountDetails():Promise<string>
    

}
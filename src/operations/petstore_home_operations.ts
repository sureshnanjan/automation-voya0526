export interface PSHomeOperations{
    getAvailableCategories():Promise<string[]>
    accessCategory(catName:string):Promise<void>
    accessPet(petId:string):Promise<void>
    addPetToCart(petId:string,howmany:number):Promise<void>
    checkOut():Promise<void>
    signIn(uname:string, pwd:string):Promise<void>
    getSignInResult():Promise<string>
}
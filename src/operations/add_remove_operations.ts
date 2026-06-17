export interface AddRemoveOperations{
   getTitle():Promise<string>
   addElement():Promise<void>
   getAddedElementsCount():Promise<number>
   removeElement():Promise<void>

}
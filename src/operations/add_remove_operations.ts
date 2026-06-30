import type { HerokuAppOperations } from "./heroku_app_operations"

export interface AddRemoveOperations extends HerokuAppOperations{
   getTitle():Promise<string>
   addElement():Promise<void>
   getAddedElementsCount():Promise<number>
   removeElement():Promise<void>

}
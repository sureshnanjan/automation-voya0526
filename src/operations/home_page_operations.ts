import type { ABTestingOperations } from "./abtesting_operations";
import type { HerokuAppOperations } from "./heroku_app_operations";
export type LogoDetail= {
    color:string;
    width:number;
    text:string
}
export interface HomePageOperation extends HerokuAppOperations{
    //Title:Promise<string>
    getTitle():Promise<string|null>;
    getSubTitle():Promise<string>;
    getLogoDetail():Promise<LogoDetail>
    getAvailableExamples():Promise<string[]>
    goToExample(examplename:string):Promise<HerokuAppOperations>
    //gotoABTesting():Promise<void>
    //goToAddRemove():Promise<void>

}
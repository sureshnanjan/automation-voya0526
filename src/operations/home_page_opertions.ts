export type LogoDetail= {
    color:string;
    width:number;
    text:string
}
export interface HomePageOperation{
    //Title:Promise<string>
    getTitle():Promise<string|null>;
    getSubTitle():Promise<string|null>;
    getLogoDetail():Promise<LogoDetail|null>
    getAvailableExamples():Promise<string[]>
    goToExample(examplename:string):Promise<void>
    //gotoABTesting():Promise<void>
    //goToAddRemove():Promise<void>

}
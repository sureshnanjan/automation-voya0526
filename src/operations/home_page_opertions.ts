export type LogoDetail= {
    color:string;
    width:number;
    text:string
}
export interface HomePageOperation{
    //Title:Promise<string>
    getTitle():Promise<string|null>;
    getSubTitle():Promise<string>;
    getLogoDetail():Promise<LogoDetail>
    getAvailableExamples():Promise<string[]>
    goToExample(examplename:string):Promise<void>
    //gotoABTesting():Promise<void>
    //goToAddRemove():Promise<void>

}
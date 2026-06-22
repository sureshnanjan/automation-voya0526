type LogoDetail= {
    color:string;
    width:number;
    text:string
}
export interface HomePageOperation{
    //Title:Promise<string>
    getTitle():Promise<string>;
    getSubTitle():Promise<string>;
    getLogoDetail():Promise<LogoDetail>
    getAvailableExamples():Promise<string[]>
    goToExample(examplename:string):Promise<void>
    //gotoABTesting():Promise<void>
    //goToAddRemove():Promise<void>

}

class MyClass{
    // Access Modifiers
    // public , private , protected
    // Fields Properties attributes - 
    public age:string;
    public name:string;
    public lname:string;
    protected info_descendents:string
    private internalsecretcode:string
    public static  classLevelData:string
    private static _instance:MyClass;
    // Methods
    getFullName():string{
        return this.lname + this.name
        //this.
    }
    private constructor(){} 
    // Events
    // Instance Members / Static Members
    // SINGLETON Patterns
    public static CreateInstance():MyClass{
       if(!this._instance){
        this._instance = new MyClass();
       }
       return this._instance;
    } 

}



export interface HerokuAppOperations{
    getForkMeDetails():Promise<string>
    getFooterDetails():Promise<string>
}
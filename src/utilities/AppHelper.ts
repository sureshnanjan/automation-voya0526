import { HerokuConfig } from "../../app.config";
import { HomePage } from "../implementation/home_page";
// Factory Method
export function GetHerokuAppHomePage(){

    if (HerokuConfig.tool === 'playwright') {

        return HomePage.Create(page)
        
    }
    if (HerokuConfig.tool === 'wdio') {

        return HomePage.Create(page)
        
    }
}
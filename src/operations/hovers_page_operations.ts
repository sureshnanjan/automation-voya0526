import type { HerokuAppOperations } from "./heroku_app_operations";

export interface HoversPageOperation extends HerokuAppOperations{
    getTitle():Promise<string>;
    getAvailableImageCount():Promise<number>
}
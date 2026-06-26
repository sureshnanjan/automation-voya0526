import type { HerokuAppOperations } from "./heroku_app_operations"

export interface ABTestingOperations extends HerokuAppOperations{
    getTitle():Promise<string>
    getDescription():Promise<string>
    disableABTesting():Promise<void>
    enableABTesting():Promise<void>
}
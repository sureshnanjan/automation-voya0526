export interface ABTestingOperations{
    getTitle():Promise<string>
    getDescription():Promise<string>
    disableABTesting():Promise<void>
    enableABTesting():Promise<void>
}
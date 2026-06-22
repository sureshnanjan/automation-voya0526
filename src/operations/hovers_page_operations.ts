export interface HoversPageOperation{
    getTitle():Promise<string>;
    getAvailableImageCount():Promise<number>
}
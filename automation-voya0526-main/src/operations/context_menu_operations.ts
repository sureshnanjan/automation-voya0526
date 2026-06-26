export interface ContextMenuOperations{
    getTitle():Promise<string|null>;
    getFirstDetails():Promise<string|null>;
    getSecondDetails():Promise<string|null>;
    invokeContextMenu():Promise<void>
    getContextMenuMessage():Promise<string|null>
    acceptContextMenu():Promise<void>
}
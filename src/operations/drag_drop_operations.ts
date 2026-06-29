export interface DragDropOperations{
    fetchTitle():Promise<string>
    fetchElements():Promise<string[]>
    dragElement(pos1:number, pos2:number):Promise<void>
}
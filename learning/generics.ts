const myItems:Array<string>= [100,200]
const myNumbers:Array<number> = [100,200,300]

type  myType<T1,T2> = {
    att1:suresh,
    attr2:suresh1,
}

const myTypeItems:Array<myType> =[{att1:"",attr2:100}]

type Stack = {
    items:number[]
  
}

type MyGenricStack<T1,T2> = {
    items:T1[]
    items2:T2
}

Array<string>
Array<number>
Array<myType>


const mynums = [1,2,3,4]
const mynames = ["one", "two"]
const mycustom:myType[] = [{att1:"",attr2:0},{att1:"two",attr2:1},{att1:"three",attr2:3}]

mynums.at(0)
mynames.at(0)
mycustom.at(0)
//mynums.

mycustom.at
const mystack:MyGenricStack<number,boolean> = {items:[1,2,3,4,5],items2:true}
const mystringStack:MyGenricStack<string,myType> = {items:["One","Two"],items2:{att1:"",attr2:100}}
//const myItemsStack:MyGenricStack<myType> ={items:[{att1:"",attr2:100}]}

function add(p1:number,p2:number):number{
   return p1 + p2
}

function genericAdd<T>(p1:T,p2:T):T{
    return p1;
}

genericAdd<string>("","");
genericAdd<number>(1,2)
genericAdd<myType>({att1:"One",attr2:1},{att1:"two",attr2:2})




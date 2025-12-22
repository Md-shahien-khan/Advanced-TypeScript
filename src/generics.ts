// 6-3 Generics in typescript
// In TypeScript, generics allow you to write flexible, reusable code that works with different types without losing type safety. Think of them as “type parameters” you pass when using a function, class, or interface.

// Dynamically generalize

// const friends : string[] = ["Mr.X", "Mr.Y", "Mr.Z"];
// const friends : string[] = ["Mr.X", "Mr.Y", "Mr.Z"];

// const rollNumbers : number[] = [4, 5, 11];

// const isEligibleList : boolean[] = [true, false, true];



type GenericArray = Array<number>
// but i cant wrtie everytime for array of number for roll or boolean



//  even we can wrtie it like that


const friends : Array<string> = ["Mr.X", "Mr.Y", "Mr.Z"];

const rollNumbers : GenericArray = [4, 5, 11];

const isEligibleList : Array<boolean> = [true, false, true];


const sqrFunc = (value : number) =>{
    return value * value ;
}

sqrFunc(8);



// by addning generic 
// type GenericArray2<value> = Array<value>;
// then we dont have to change everytime parameter will receive the type
type GenericArray2<T> = Array<T>;
// u can wrtie like that

const friends2 : GenericArray2<string> = ["Mr.X", "Mr.Y", "Mr.Z"];

const rollNumbers2 : GenericArray2<number> = [4, 5, 11];

const isEligibleList2 : GenericArray2<boolean> = [true, false, true];



// we can use for tuple as well
// normal tuple
type Coordiantes = [number, number];
// const coordinates : Coordiantes = ["20", "30"];

// so eveytime u have to change if you chagne the value in string or number
// const coordinates : Coordiantes = ["20", "30"];
const coordinates2 : Coordiantes = [20, 30];


// by adding generic we can define the type
type Coordiantes2<X,Y> = [X,Y];
const coordinates3 : Coordiantes2<string, string> = ["20", "30"];
const coordinates4 : Coordiantes2<number, number> = [20, 30];




// generic for object 
type GenericArray5<T> = Array<T>
const friends5 : GenericArray2<string> = ["Mr.X", "Mr.Y", "Mr.Z"];

const rollNumbers5 : GenericArray2<number> = [4, 5, 11];

const isEligibleList5 : GenericArray2<boolean> = [true, false, true];


type User = {name : string, age : number}
const userList: GenericArray5<User> = [
    {
        name : "shawon",
        age : 24
    },
    {
        name : 'khan',
        age : 22
    },
    // {
    //     // isEligible5 : true
    // }
]

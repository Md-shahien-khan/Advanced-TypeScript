// Type Interface 6-2
// In TypeScript, an interface is used to define the shape of an object—what properties and methods it must have, and their types.
type User = {
    name : string;
    age : number;
};


type Role = {
    role : 'admin' | 'user'
}




// ---------------------------
// interface = object, array, object, function.

interface IUser {
    name : string;
    age : number
}

const user3 : IUser = {
    name : 'shawon',
    age : 24
}

type isAdmin = boolean;

const isAdmin : isAdmin = false;

type UserWithRole = User & Role;

interface IUserWithRole extends IUser{
    role : "admin" | "user"
}


// const user1 : UserWithRole = {
//     name : 'Mr.x',
//     age : 24,
//     role : 'admin'
// };

// we can use in this way 

const user1 : IUserWithRole = {
    name : 'Mr.x',
    age : 24,
    role : 'admin'
    // because it has name age role so typescript won't mind.
};





const user2 : User = {
    name : 'Mr. Y',
    age : 43
};


// ----- for funtion

type Add = (num1 : number, num2: number) => number;

interface IAdd {
    (num1 : number, num2 : number) : number
}

// const add : Add = (num1,  num2) => num1 + num2;
const add : IAdd = (num1,  num2) => num1 + num2;

interface IFriends {
    [index : number] : string
}

const friends : IFriends = ["A", "B", "C", "D", "E"];
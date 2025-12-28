// 6-6 Constraint in typescript
// strict rules : like a restricted area.


// for more clean code lets say the object is so big and then u can deeclare a type then add the type after extend for clean code.

type Student = {id : number; name : string}

// const addStudentToCourse = <T extends {id : number, name : string}>(studentInfo : T) => {
const addStudentToCourse = <T extends Student>(studentInfo : T) => {
    // inside T you're strictly mentionishing that u need id and name
    return {
        course : "Next Level",
        ...studentInfo
    };
};

const student1 = {
    id : 123,
    name : "Mezba",
    hasPen : true,
};

const student2 = {
    id : 124,
    name : 'jhongkar mahbub',
    isMarried : true,
    hasCar : true,
    salary : 500000
};
const student3 = {
    hasCompletedDegree : true,
    id : 345,
    name : "John"
};

const result = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);
const result3 = addStudentToCourse(student3);
console.log(result3);
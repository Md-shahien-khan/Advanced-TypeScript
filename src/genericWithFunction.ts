// 6-5 Generics with function
// Generic Function

// const createArrayWithString = (value : string) => [value];

// const createArrayWithNumber = (value : number) => [value];

// const createArrayWithUserObj = (value : {id : number; name : string}) => {return [value]};

// on the top its old way and u have to write a lot of code.lets use generic and u can use any type 

/***
 *  const arrString = createArrayWithString('shawon');
    const arrNum = createArrayWithNumber(222);
    const arrObj = createArrayWithUserObj({
    id : 123,
    name : 'next level'
})
 * 
 * */ 

const createArrayWithGeneric = <T>(value : T) => {
    return [value];
}

const arrString = createArrayWithGeneric('shawon');
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id : 123,
    name : 'next level'
})





// Tupple
const createArrayWithTupple = (param1 : string, param2 : number) => [param1, param2];

const createArrayWithTuppleWithGereric = <X,Y>
(param1 : X, param2 : Y) => [
    param1, param2
];

const res1 = createArrayWithTuppleWithGereric('shawon', false);
const res2 = createArrayWithTuppleWithGereric(222, {name : 'khan', id : 234664});




// More Example 
const addStudentToCourse = <T>(studentInfo : T) => {
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

const result = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);
// console.log(result, result2);


const mergeObjects = <T, U>(obj1: T, obj2: U) => {
    return {
        ...obj1,
        ...obj2,
    };
};

const user = { id: 1, name: 'Shawon' };
const extraInfo = { role: 'admin', isActive: true };

const mergedData = mergeObjects(user, extraInfo);
console.log(mergeObjects)





// Api response
type ApiResponse<T> = {
    success: boolean;
    data: T;
};

const createResponse = <T>(data: T): ApiResponse<T> => {
    return {
        success: true,
        data,
    };
};

const userResponse = createResponse({
    id: 1,
    name: 'Next Level Dev',
});

const numberResponse = createResponse(200);
console.log(numberResponse);


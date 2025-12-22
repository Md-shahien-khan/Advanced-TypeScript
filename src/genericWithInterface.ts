interface Developer<T, X=null> {  // we put null because not everyone has bike and its mendatory to put a value so we use null
    name : string;
    salary : number;
    device : {
       brand : string;
       model : string;
       releasedYear : number; 
    };

    skills : T,
    bike? : X
};

interface forJuniorDeveloper {
    frontEnd : string;
    backEnd : string;
    goodDev : boolean;
    numberOfLanguage : number
}
// const juniorDeveloper : Developer<{
//     frontEnd : string;
//     backEnd : string;
//     goodDev : boolean;
//     numberOfLanguage : number
// }> = {
//     name : 'Mr. junior',
//     salary : 2000,
//     device : {
//         brand : 'Lenevo',
//         model : "A21",
//         releasedYear : 2021
//     },
//     skills : {
//         frontEnd : 'React',
//         backEnd : 'Node',
//         goodDev : true,
//         numberOfLanguage : 10
//     },
// };
const juniorDeveloper : Developer<forJuniorDeveloper, {brand : "yamaha", engCap : '2000cc'}> = {
    name : 'Mr. junior',
    salary : 2000,
    device : {
        brand : 'Lenevo',
        model : "A21",
        releasedYear : 2021
    },
    skills : {
        frontEnd : 'React',
        backEnd : 'Node',
        goodDev : true,
        numberOfLanguage : 10
    },
};

// const seniorDeveloper : Developer<{
//     fullStack : string;
//     aiDev : string;
//     betterDev : boolean;
//     aiFeature : boolean
// }> = {
//     name : 'Mr. Senior',
//     salary : 9000,
//     device : {
//         brand : 'Mac',
//         model : "M5",
//         releasedYear : 2025
//     },
//     skills : {
//         fullStack : "yes",
//         aiDev : "yes",
//         betterDev : true,
//         aiFeature : true
//     }
// };


// for better clean code 
// interface or type 
interface forSeniorDev  {
    fullStack : string;
    aiDev : string;
    betterDev : boolean;
    aiFeature : boolean
}
const seniorDeveloper : Developer<forSeniorDev> = {
    name : 'Mr. Senior',
    salary : 9000,
    device : {
        brand : 'Mac',
        model : "M5",
        releasedYear : 2025
    },
    skills : {
        fullStack : "yes",
        aiDev : "yes",
        betterDev : true,
        aiFeature : true
    },
    bike : null
};

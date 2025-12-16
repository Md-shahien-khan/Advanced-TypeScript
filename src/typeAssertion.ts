// Class 1 
// 6-1 Type Assertion
// In TypeScript, a type assertion tells the compiler to treat a value as a specific type, 
// even if it can’t infer it on its own. It’s like saying: “I know better than the compiler what this type is.”
// Type Assertion বলতে বোঝায়—TypeScript কম্পাইলারকে বলা যে,
// “এই ভ্যালুটিকে তুমি এই নির্দিষ্ট টাইপ হিসেবে ধরো।”



let anything : any;

anything = 222;

let nameOfSomeone : any;

// (nameOfSomeone as string).

// (anything as number). will show you all the things that comes for number such as toFixed()

const kgToGMConverter = (input: string | number) : string | undefined | number => {
    if(typeof input === "number"){
        return input * 1000;
    }
    else if(typeof input === 'string'){
        const [value] = input.split(" ");
        return `Converted Output is : ${Number(value) * 1000}`;
    }
}

const result1 = kgToGMConverter(2) as number; //thats called assertion
const result2 = kgToGMConverter('2 Kg') as string;

// just because you're sure.

console.log(result1);
console.log(result2);


// for Error
type CustomError = {
    message : string;
};

try{

}
catch(error){
    console.log((error as CustomError).message);
}
//  thats the understanding for error message
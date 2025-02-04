let numbers:number[]=[1,2,3,4,5];
console.log(numbers);
for(let i=0;i<=numbers.length;i++)
{
    console.log(numbers[i]);
}
let numbers1:number[]=[1,2,3,4,5];
console.log(numbers1.indexOf(5));

let strings:string[]=["shivam","Ashu","Ankit"];
let bond=strings.push("sjal");
console.log(bond);
console.log(strings);
console.log(typeof strings);
console.log(strings.join("---"));
let ourTuple: [number, boolean, string]=[5,true,"shivam"];
console.log(ourTuple);

let ourTuple1: [number, boolean, string,number]=[5,true,"shivam",6];
console.log(ourTuple1);
let firstName:string = "Harshada";
let lastName = "Sawant";
let num : number = 900;

let text = `Welcome ${firstName}, ${lastName}! ${num}`;
console.log(text);

// String method
let str: string = 'Hello TypeScript';
console.log(str.charAt(0)); // returns 'H'

let str1: string = 'Hello';
let str2: string = 'TypeScript';
console.log(str1.concat(str2)); // returns 'HelloTypeScript'
console.log(str1.concat(' ', str2)); // returns 'Hello TypeScript'

let str3: string = 'Hello Javascript';
console.log(str3.replace('Java', 'Type')); // returns 'Hello TypeScript'

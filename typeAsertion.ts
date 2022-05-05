let str: any = 'harshada';
console.log(str);
 
//can tell compiler to treat str a string
let len: number = (str as string).length;
console.log(len);


let num: any = 77;
  
//can tell compiler to treat as a number
let num1 = <Number> num;
  
console.log(num1);
console.log(typeof num1);
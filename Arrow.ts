// normal function 
var hello = function() {
    return "Hello World!";
  }

  console.log(hello());
// Arraow Function
var hello1=() => {
    return "Hello World";
}
console.log(hello1());

// is with parameter without  data type
  var getResult = function(username, points) {  
    return username + ' scored ' + points + ' points!';  
  };  
  console.log(getResult("harshada",100.5));

var getArr= (username,points)=>{ return username + ' scored ' + points + ' points!'}; 
console.log(getArr("harshada",100));

//with parameter with data type

  var getResult1 = function(username:string, points:number) {  
    return username + ' scored ' + points + ' points!';  
  };  
  console.log(getResult1("harshada",100.5));
//   create arrow function

 


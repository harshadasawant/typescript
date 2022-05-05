// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male","sfd","gfgf"));

  // Define a destructuring array with two regular variables and one rest variable:
const [firstName, lastName, ...otherInfo1] = ["Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"];
  console.log(otherInfo1); 

  const { firstName2, lastName2, ...otherInfo2 } = {
    firstName2: "Oluwatobi",
    lastName2: "Sofela", 
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
  }

  console.log(otherInfo2); 

//   Spread
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);

//combining two Array
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

//combining two objects
let myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  let updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle);

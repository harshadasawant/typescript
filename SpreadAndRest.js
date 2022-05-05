var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName) {
    var otherInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherInfo[_i - 2] = arguments[_i];
    }
    return otherInfo;
}
// Invoke myBio function while passing five arguments to its parameters:
console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male", "sfd", "gfgf"));
// Define a destructuring array with two regular variables and one rest variable:
var _a = ["Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"], firstName = _a[0], lastName = _a[1], otherInfo1 = _a.slice(2);
console.log(otherInfo1);
var _b = {
    firstName2: "Oluwatobi",
    lastName2: "Sofela",
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
}, firstName2 = _b.firstName2, lastName2 = _b.lastName2, otherInfo2 = __rest(_b, ["firstName2", "lastName2"]);
console.log(otherInfo2);
//   Spread
var myName = ["Sofela", "is", "my"];
var aboutMe = __spreadArray(__spreadArray(["Oluwatobi"], myName, true), ["name."], false);
console.log(aboutMe);
// Spread in function call
function abc() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
var numbersOne1 = [1, 2, 3, 4];
abc.apply(void 0, numbersOne1);
//combining two Array
var numbersOne = [1, 2, 3];
var numbersTwo = [4, 5, 6];
var numbersCombined = __spreadArray(__spreadArray([], numbersOne, true), numbersTwo, true);
console.log(numbersCombined);
//combining two objects
var myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
};
var updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
};
var myUpdatedVehicle = __assign(__assign({}, myVehicle), updateMyVehicle);
console.log(myUpdatedVehicle);

// class <class_name>{    
//     field;    
//     method;    
// } 
var Student = /** @class */ (function () {
    // constructor(){
    // }
    function Student(code, name) {
        this.getGrade1 = function () {
            console.log("sdf");
            return 123;
        };
        this.getGrade2 = function () {
            return 5765;
        };
        this.studName = name;
        this.studCode = code;
    }
    Student.prototype.getGrade = function () {
        return "A+";
    };
    Student.prototype.display = function () {
        console.log("Student code is: " + this.studCode);
        console.log("Student Name is: " + this.studName);
        console.log(this.getGrade());
    };
    return Student;
}());
// let object_name = new class_name(parameter)  
var obj = new Student(2, "Harshada");
obj.display();
console.log(obj.getGrade1());
console.log(obj.getGrade2());

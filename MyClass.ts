// class <class_name>{    
//     field;    
//     method;    
// } 

class Student {  
    studCode: number;  
    studName: string;  
   
    // constructor(){
        
    // }
  
        constructor(code: number, name: string) {  
            this.studName = name;  
            this.studCode = code;  
    }  

    
  
    getGrade() : string {  
        return "A+" ;  
    }  
     getGrade1 = ():number=>{
      console.log("sdf"); 
      return 123; 
    }

    getGrade2 = ()=>{
        return "5765"; 
      }
    display():void {   
        console.log("Student code is: "+this.studCode)   
        console.log("Student Name is: "+this.studName)   
        console.log(this.getGrade());
    }   
}  

// let object_name = new class_name(parameter)  

let obj = new Student(2,"Harshada");  
obj.display();
console.log(obj.getGrade1());
console.log(obj.getGrade2());
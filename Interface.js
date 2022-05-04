// interface interface_name {  
//     // variables' declaration  
//     // methods' declaration  
// }  
var Oreo = { name: 'O', language: 'Java', sayHi: function (a) { return "Hi there" + a; }, hello: function () { return "hi"; } };
var variable = function (abc) { };
variable("");
var OperatingSystem = function (var1) {
    console.log('Android ' + var1.name + ' has ' + var1.language + ' language ' + var1.sayHi(6) + ' ----- ' + var1.hello());
};
OperatingSystem(Oreo);
var A = /** @class */ (function () {
    function A(name, language) {
        this.sayHi = function () {
            return "hi";
        };
        this.name = name;
        this.language = language;
    }
    return A;
}());
var os1 = new A('Harshada', 'Java');
var os2 = new A('Daksh', 'JavaScript');
console.log(os1.name + "  " + os1.language + " " + os1.sayHi());
console.log(os2.name + "  " + os2.language + " " + os2.sayHi());

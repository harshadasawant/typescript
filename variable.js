function testLet() {
    var x = 10;
    console.log("Output : =" + x);
    x = 20; // not redeclare but can c hange the value
    console.log("Output : =" + x);
}
testLet();
function testVar() {
    var x = 10;
    console.log("Output : =" + x);
    var x = 20; // we can redeclare in same scope
    console.log("Output : =" + x);
}
testVar();
function testConst() {
    var x = 10;
    console.log("Output : =" + x);
    //    x = 20; can not change value
    console.log("Output : =" + x);
}
testConst();

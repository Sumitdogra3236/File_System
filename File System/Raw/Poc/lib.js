// variable 
// function
let a = "Hello from lib.js";
function libfn(param){
    console.log("Inside lib fn",param);
} 
function libfn2(){
    console.log("Inside lib fn, Hello from libfn2");
}
module.exports = {
    varName : a,
    fn1 : libfn,
    fn2 : libfn2
}
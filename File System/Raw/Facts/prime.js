let flag = true;
let num = 25;

for(let i=2; i*i<=num;i++){
    if(num%i == 0){
        flag = false;
        break;
    }
}
if(flag){
    console.log("Number",num,"is Prime");
}
else {
    console.log("Number",num,"is not Prime");
}
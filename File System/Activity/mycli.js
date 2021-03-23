
let helpFileObj = require("./commands/help.js");
let organizeFileObj = require("./commands/organize.js");
let viewFileObj = require("./commands/view.js");


// input 
let input = process.argv.slice(2);
// node mycli.js view <dirname> tree
// node mycli.js view <dirname> flat
// node mycli.js organize <dirname> 
// node mycli.js help

let cmd = input[0];
switch (cmd) {
    case"view":
    viewFileObj.viewFun(input[1],input[2]);
        break;
    case "organize":
        organizeFileObj.organizeFun(input[1]);
        break;
    case "help":
        helpFileObj.helperFn();
        break;
    default:
        console.log(`Wrong Command 
        : (type help to see the list of the command)`);    
}







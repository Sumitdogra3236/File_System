let fs = require("fs");
let p = require("path");  // path module in node js
let input = process.argv.slice(2);
let path = input[0];
// nodejs fs module -> function
function isFileorNot(dirpath){
    // check extension 
    return fs.lstatSync(dirpath).isFile();
    }
    function getContent(dirpath){
    // content 
    return fs.readdirSync(dirpath);
    }


function viewTree(dirpath, indent){
    let isFile = isFileorNot(dirpath);
    let stArr = dirpath.split("\\");
        let toPrint = stArr.pop();
    if (isFile  == true) {
        // let stArr = dirpath.split("\\");
        // let toPrint = stArr.pop();
        console.log(indent,toPrint + "*");
    } else {
        // let stArr = dirpath.split("\\");
        // let toPrint = stArr.pop();
        // console.log(indent,toPrint);
        console.log(indent,p.basename(dirpath)); // using path module(p.basename(dir)) to get the last element of the address
        // recusrion
        let content = getContent(dirpath);
        // console.log(content);
        for(let i = 0; i<content.length;i++){
             //let childPath = dirpath + "\\" + content[i];
             // good practice using path module to avoid error in unix
             let childPath = p.join(dirpath,content[i]); // using path module
            viewTree(childPath,indent + "\t");
        }
    }
}

viewTree(path,"");
let fs = require("fs");
let p = require("path");    // path module in node js
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

function viewFlat(dirpath){
    let isFile = isFileorNot(dirpath);
    if (isFile  == true) {
        console.log(dirpath + "*");
    } else {
        console.log(dirpath);
        // recusrion
        let content = getContent(dirpath);
        // console.log(content);
        for(let i = 0; i<content.length;i++){
            // let childPath = dirpath + "\\" + content[i];
            //  let childPath = dirpath + "/" + content[i];
            let childPath = p.join(dirpath,content[i]);
            viewFlat(childPath);
        }
    }
}
viewFlat(path); 
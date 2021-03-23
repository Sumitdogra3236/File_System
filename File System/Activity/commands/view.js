let fs = require("fs");
let p = require("path"); 
function view(dirpath,mode){
    if(mode == "tree"){
        viewTree(dirpath,"");
    }
    else if(mode == "flat"){
        viewFlat(dirpath);
    }
    else {
        console.log("Wrong Command");
    }
}

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


module.exports = {
    viewFun : view
}
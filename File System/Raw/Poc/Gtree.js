let root = {
    name : "d10",
    children : [{
        name : "d20",
        children : [{
            name : "d50",
            children : []
        },{
            name : "d60",
            children : []
        }]
    },{
        name : "d30",
        children : [{
            name : "d70",
            children : []
        },{
            name : "d80",
            children : [{
                name :  "d100",
                children : []
            }]
        }]
    },{
        name : "d40",
        children : [{
            name : "d90",
            children : []
        }]
    }]
}

// finction displayGtree should print the whole tree 
// faith ?? base case
function displayGtree(node){
// work 
let meNmyChild = node.name + "=>";
for(let i=0;i<node.children.length;i++){
    let child = node.children[i];
    meNmyChild += child.name + ",";
}
console.log(meNmyChild);
//call-> and it will work like magic
for(let i=0;i<node.children.length;i++){
    let child = node.children[i];
    displayGtree(child);
    
}




}
displayGtree(root);

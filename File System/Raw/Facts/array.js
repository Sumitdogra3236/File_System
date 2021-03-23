// Array -> array is a collection of anything , not necessarily homogeneous
// Array declared by, ->  let arr =[];
// there is not Array is JS, arrays are emulated
let arr=[
    1,
    1.1,
    "Hello",
    Sherlock={Name:"Sumit",Last_Name:"Dogra"},
    function sayHi(param){
        console.log("Hi From ",param);
        return "JS";

    }

];
// get 
// console.log(arr);
// console.log(arr[3].Name);
// console.log(arr[4]);
// console.log(arr[4]("Sumit"));
// let ans = arr[4]("Sumit");
// console.log(ans);
// // console.log(arr.length);
// for(let i =0;i<arr.length;i++){
//     console.log(i,"contains:", arr[i]);
// }

// to update
// console.log(arr);
// console.log("------------------------------")
// arr[1]= "Sherlock Holmes";
// console.log(arr);

// arr[15] = "15th Value";
  
// arr["last val"] = "Last Value";
// arr[95] ="Last";
//  console.log(arr)
// console.log(arr.length)

// -> add last & remove last
// console.log(arr)
// console.log("---------------------------")
// arr.pop();  // remove last -> pop()
// arr.push(101); // add last -> push()
// console.log(arr)

// // -> add first & remove first
// console.log(arr)
// console.log("---------------------------")
// arr.shift(); // remove first -> shift()
// arr.unshift(10); // add first -> unshift()
// console.log(arr)



// const a = [1,2,3,4];
// console.log(a);
// // if we want to add in the first index of array we use unshift fuction
// a.unshift(10);
// console.log("----------------------------") 
// console.log(a);
// console.log(a.length);


// Slicing -> slice(idx,idx) -> gives copy of sliced array
// let slice = arr.slice(2,4)
// console.log(slice);


// Splicing -> splice(start_idx,count) -> Start deleting the element from the given index till count 
//  let removedEnteries = arr.splice(2,1); // arr.splice(2,1);

//  console.log(arr);

// Split() -> Split the String to array on provided measure -> string.split("h");
let string = "Hi,Hello,Haalo,Hola";
console.log(string);
let SplittedArray = string.split("H");
// join the array to string on provided measure -> SplittedArray.join("+");
let joinString = SplittedArray.join("+")
console.log(SplittedArray);
console.log(joinString);
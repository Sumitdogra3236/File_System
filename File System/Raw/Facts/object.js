// Java Script applies Prototypal OOPS while Java applies classical OOPS
// json -> (javascript object notation), json is inspired from javascript object format i.e key value pair. 
// object ->  object is a key value pair    
// to declare a empty object, we use -> let object_name = {}; 

// in object , the value present for the key is called property of object, functions of objects are called methods  
// i.e    value -> properties
//        functions -> methods
let obj ={};

let Sherlock = {
    Name:"Sumit",
    Last_Name:"Dogra",
    DOB:"30-07-2000",
    Phone:{
        Whatsapp:"7807393236",
        Calling:"8580529466"
    },
    Address:"Vill. Jared, P/O. Tourkhola, Teh. Sandhol, Mandi, Himachal Pradesh, India, 17690",
    Brother:{
        B1:"Shourya",
        B2:"Rohan",
        B3:"Sahil"
    } ,
    isRichestMan:true,
    Age:25,
    Education:["10th-> Hamirpur","12th -> Hamirpur", "B.Tech-> Chandigarh", "M.Tech-> Canada"],
    sayHi:function (param){
        console.log(param," says hi");
        return "blessing from ";
    }
}
// console.log(Sherlock);
// console.log(Sherlock.Address);
// console.log(Sherlock.isRichestMan);
// console.log(Sherlock.Phone.Calling);
// console.log(Sherlock.Brother.B2);
// console.log(Sherlock.Education[3]);
// console.log(Sherlock.sayHi("Sumit"));


//-----------------------------------------------------------------------------------
// Set & Update:
//  console.log(Sherlock);
// // Sherlock.Sister = {
// //     S1:"Manik",
// //     S2:"Diya",
// //     S3:"Bitu"
// // };
// // Sherlock.Age = 24;
//  console.log("-----------------------------------------------------------------");
// // console.log(Sherlock);
// console.log(Sherlock);
// Sherlock.Brother.B4 = "Jimmy";
console.log(Sherlock);
Sherlock.Favourite_Movies = { };
Sherlock.Favourite_Movies[1] = "Triple Frontier";
Sherlock.Favourite_Movies[2] = "Parasite";  
console.log(Sherlock);
// // delete keyword
// delete Sherlock.Phone.Calling;
// console.log(Sherlock);


// for in / for each loop
// for(let key in Sherlock){
//     console.log("Key:",key,"|value-> :",Sherlock[key]);

// }


// let key = "DOB";
// console.log(Sherlock.key); // -> will give undefined
// console.log(Sherlock[key]);
// console.log("--------------------------------------")
// Sherlock.key = "Date of Birth"; // to update key in object
// Sherlock[key] = "30-July-2000"; // to update value of key in object
// console.log(Sherlock.key); // -> will give undefined
// console.log(Sherlock[key]);




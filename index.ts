// var number = 20
// if(20 > 50)
//     {
//         number += 10
//     }
// console.log(number)    

//-----------------------------------------------------
// const names: string[] = ["raju"];

// names.push("kalia");

// console.log(names);

//----------------------------------------------------
// var ourtuple: [number,string,boolean]

// ourtuple = [4,"shako",true]

// ourtuple.push("innocent",5)

// console.log(ourtuple)

//----------------------------------------------------

// var data : {type: string, color: string, model: number} = {type : "Corolla" , color: "blue", model: 2008} 
// console.log(data)

//-------------------------------------------------------
var map1 = new Map();  
   
map1.set("Yash", 34);  
map1.set("Jeet", 65);  
map1.set("Atmadip", 80);   
for (let key of map1.keys()) {  
    console.log("Keys present in the map are= " +key);          
}  
for (let value of map1.values()) {  
    console.log("values present in the map are= " +value);      
}       
for (let entry of map1.entries()) {  
    console.log(entry[0], entry[1]);   
}  


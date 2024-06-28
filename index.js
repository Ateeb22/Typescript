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


var map1 = new Map();
map1.set("Yash", 34);
map1.set("Jeet", 65);
map1.set("Atmadip", 80);
for (var _i = 0, _a = map1.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log("Keys present in the map are= " + key);
}
for (var _b = 0, _c = map1.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log("values present in the map are= " + value);
}
for (var _d = 0, _e = map1.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], entry[1]);
}

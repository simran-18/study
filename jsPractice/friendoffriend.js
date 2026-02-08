const findFoF=(obj,key)=>{
    const list=obj[key];
    if(!list) return [];
    const finalList=[...list];
    for(let it of list){
        finalList.push(...findFoF(obj,it));
    }
    return finalList;
}
const mapping={
    "a":["b","c"],
    "b":["d","g"],
    "d":["p","q"],
    "l":["x","y"]
}
console.log(findFoF(mapping,"a"));
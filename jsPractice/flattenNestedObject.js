const flatten=(obj,prefix="")=>{
   let result={}
   for(let key in obj){
      let val=obj[key];
      let newKey=prefix ===""?key:prefix+'.'+key;
      if(val!==null && typeof val==="object"){
         result={...result,...flatten(val,newKey)};
      }else{
        result[newKey]=val;
      }
   }
   return result;
}
const obj={
    A:'12',
    B:'23',
    C:{
        P:23,
        O:{
            L:56
        },
        Q:[1,2]
    }
}
console.log(flatten(obj));

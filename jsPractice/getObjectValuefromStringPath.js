const get=(obj,path)=>{
if(!Array.isArray(path)){
  path=path.replaceAll("[",".");
  path=path.replaceAll("]","");
}
  const key=!Array.isArray(path)?path.split(".").filter(Boolean):path;
  if(!key || !path){
    return []
  }
//   console.log("Current key::",key)
  let current=obj;
  for(let it of key)
  {
    current=current[it];
    if(current===undefined){
        return undefined;
    }
  }
  return current;
}
const obj={
    a:{
        b:{
            c:[1,2,3]
        }
    }
}
console.log(get(obj,'a.b.c'));
console.log(get(obj,'a.b.c.0'))
console.log(get(obj,'a.b.c[1]'))
console.log(get(obj,['a','b','c','2']))
console.log(get(obj,'a.b.c[3]'));
console.log(get(obj,'a.c'));
console.log(get(obj,'a'));
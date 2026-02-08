 const deepFilter=(obj,callback)=>{
    for(let key in obj)
    {
      const val=obj[key];
      if(typeof val==="object"){
        deepFilter(val,callback)
      }else{
         if(!callback(val))
         {
           delete obj[key]
         }
      }
      if(JSON.stringify(val)==='{}'){
        delete obj[key]
      }
    }
    return obj;
 }

 const obj={
    a:1,
    b:{
        c:2,
        d:-3,
        e:{
            f:{
                g:-4
            }
        },
        h:{
            i:5,
            j:6
        }
    },
    c:{}
 }
const filter=(n)=>n>=0;
console.log(deepFilter(obj,filter))

const obj3 = {
  a: 1,
  b: {
    c: "hello",
    d: -4
  },
  e: true
};

const numFilter = n => typeof n === "number" && n >= 0;

console.log(deepFilter(obj3, numFilter));
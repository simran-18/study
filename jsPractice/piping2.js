function pipe(obj){
    return function(...args){
      for(let key in obj){
        let val=obj[key];
        if(typeof val==="function"){
            obj[key]=val(...args)
        }
        else if(typeof val==="object")
        {
            obj[key]=pipe(val)(...args)
        }
      }
      return obj;
    }
}

const object={
    a:{
        b:(a,b,c)=>a+b+c,
        c:(a,b,c)=>a+b-c,
    },
    d:(a,b,c)=>a-b-c,
}

const result=pipe(object)(1,2,3);
console.log(result)
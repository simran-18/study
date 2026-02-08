// Array.prototype.myMap=function(callback)
// {
//     if(typeof callback!=="function")
//     {
//         throw new Error("not supported")
//     }
//     const result=[]
//     for(let i=0;i<this.length;i++)
//     {
//         result.push(callback(this[i],i,this))
//     }
//     return result;
// }
// Array.prototype.myFilter=function(callback)
// {
//     if(typeof callback!=="function")
//     {
//         throw new Error("not supported")
//     }
//     const result=[]
//     for(let i=0;i<this.length;i++){
//       if (callback(this[i], i, this)) 
//       {
//         result.push(this[i])
//       }
//     }
//     return result;
// }
// Array.prototype.myEvery=function(callback)
// {
//      if(typeof callback!=="function")
//     {
//         throw new Error("not supported")
//     }
//     for(let i=0;i<this.length;i++)
//     {
//         if(!callback(this[i],i,this))
//         {
//             return false;
//         }
//     }
//     return true;
// }
// Array.prototype.mySome=function(callback)
// {
//      if(typeof callback!=="function")
//     {
//         throw new Error("not supported")
//     }
//     for(let i=0;i<this.length;i++)
//     {
//         if(callback(this[i],i,this))
//         {
//             return true;
//         }
//     }
//     return false;
// }
// Array.prototype.mySome=function(callback)
// {
//      if(typeof callback!=="function")
//     {
//         throw new Error("not supported")
//     }
//     for(let i=0;i<this.length;i++)
//     {
//         if(callback(this[i],i,this))
//         {
//             return true;
//         }
//     }
//     return false;
// }
// Array.prototype.myReduce=function(callback,initialValue)
// {
//     if(typeof callback!=="function")
//     {
//         throw new Error("not supported")
//     }
//     let accumulator=initialValue!==undefined?initialValue:this[0];
//     const startValue=initialValue!==undefined?0:1;
//     for(let i=startValue;i<this.length;i++)
//     {
//         accumulator=callback(accumulator,this[i],i,this)
//     }
//     return accumulator; 
// }
// const arr = [1, 2, 3, 4, 5];
// const result1=arr.myMap((x)=>x*2);
// console.log("result1 is:::",result1)
// const result2=arr.myFilter((x)=>x%2==0);
// console.log("result2 is:::",result2)
// const result3=arr.myEvery((x)=>x>3);
// console.log("result3 is:::",result3)
// const result4=arr.mySome((x)=>x>3);
// console.log("result4 is:::",result4);
// const result5=arr.myReduce((acc,curr)=>acc+curr,0);
// console.log("result5 is:::",result5);

// function sum(a,b)
// {
//     return function(b)
//     {
//         if(!b) return a;
//         return sum(a+b)
//     }
// }

// console.log(sum(2)(3)(4)())


// function Person(name)
// {
//     this.name=name;
// }
// Person.prototype.sayHi=function()
// {
//     return `Hi ${this.name}`
// }
// function Developer(name,title)
// {
//     Person.call(this,name)
//     this.title=title;
// }
// Developer.prototype=Object.create(Person.prototype);
// Developer.prototype.constructor = Developer;
// Developer.prototype.getTitle=function()
// {
//     return `My title is ${this.title}`
// }

// const dev = new Developer("Simran", "Frontend Engineer");
// console.log(dev.sayHi());
// console.log(dev.getTitle());

const arr=[1,2,3,[4,5,[9,10]],[11,45,[14,[16,[-3,-8]]]]]

// function flattenArray(arr)
// {
//     const result=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         if(Array.isArray(arr[i]))
//         {
//            result.push(...flattenArray(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(flattenArray(arr))

// function flattenArray(arr,depth)
// {
//     const result=[];
//     for(let i=0;i<arr.length;i++)
//     {
//         if(Array.isArray(arr[i]) && depth>0 )
//         {
//            result.push(...flattenArray(arr[i],depth-1))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(flattenArray(arr,1))

// function f() {
//   console.log(this);
// }
// let user = {
//   g: f.bind(null),
// };
// user.g();

// const arr1=[3,4,-1,0];
// console.log(Math.max.apply(null,arr1))

function printName(city,age){
    return `My name is ${this.name} and i am from ${city} and i am ${age} old`
}
const user={
    name:"Simrandeep Kaur"
};
Function.prototype.myCall=function(context,...args)
{
   context=context??globalThis;
   const key=Symbol()
   context[key]=this;
   const result=context[key](...args)
   delete context[key];
   return result;
}
Function.prototype.myApply=function(context,args)
{
   context=context??globalThis;
    if(!Array.isArray(args))
   { 
     throw new Error("not valid")
   }
   const key=Symbol()
   context[key]=this;
   const result=context[key](...args)
   delete context[key];
   return result;
}
Function.prototype.myBind=function(context,args)
{
   context=context??globalThis;
    if(!Array.isArray(args))
   { 
     throw new Error("not valid")
   }
   const fn=this;
   return function(...args1)
   {
     return fn.apply(context,[...args,...args1])
   }
}
console.log(printName.myCall(user,"Amritsar"))
console.log(printName.myApply(user,["Amritsar","24"]))
const result=printName.myBind(user,["Khadur Sahib","24"]);
console.log(result())
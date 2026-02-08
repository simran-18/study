// class Calculator {
//   constructor(value)
//   {
//     this.value=value;
//   }
//   add(num)
//   {
//     this.value+=num
//     return this;
//   }
//    multiply(num)
//   {
//     this.value*=num;
//     return this;
//   }
//     subtract(num)
//   {
//     this.value-=num;
//     return this;
//   }
//   getValue()
//   {
//     return this.value;
//   }
// }
// const calculator = new Calculator(2);
// console.log(calculator.add(3).multiply(4).subtract(5).getValue()); 

// const createAsyncTask=()=>
// {
//     const randomValue=Math.floor(Math.random()*10)
//     return new Promise((resolve,reject)=>
//     {
//        setTimeout(()=>{
//         if(randomValue>5){
//             resolve(randomValue)
//         }else{
//             reject(randomValue)
//         }
//          },randomValue*100) 
//   });
// }
// const taskRunnerIterative=async(tasks)=>
// {
//    const results=[];
//    const erorrs=[];
//    for(const task of tasks)
//    {
//     try
//     {
//        const response =await task();
//        results.push(response);
//        console.log("results::",response)
//     }catch(err)
//     {
//         erorrs.push(err)
//         console.log(err)
//     }
//    }
//    return {results,erorrs}
// }
// const functions=[
//     createAsyncTask,
//     createAsyncTask,
//     createAsyncTask,
//     createAsyncTask,
//     createAsyncTask
// ]
// taskRunnerIterative(functions).then((result)=>console.log(result))

const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;
const toString = (x) => `${x}`;
console.log("Pipe");
const result1 = pipe(add5, multiply2, subtract3)(10);// (10 + 5) * 2 - 3 = 27
// console.log(result1);
const result2 = pipe(toString, multiply2)(5); // "5" + 5 = "55"
console.log(result2);
const result3=compose(add5, multiply2, subtract3)(10);
console.log(result3);
const result4 = compose(toString, add5)(5); // "5" + 5 = "55"
console.log(result4);
function pipe(...fns)
{
    return function(args)
    {
       return fns.reduce((x,y)=>{ return y(x)},args)
    }
}

function compose(...fns)
{
    return function(args)
    {
       return fns.reduceRight((x,f)=>{ return f(x)},args)
    }
}
function test() {
  try {
    console.log("try");
    return "A";
  } finally {
    console.log("finally");
  }
}

console.log(test());  // try -> finally ->A

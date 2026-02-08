// function sum(a,b){
//   return function(b)
//   {
//      if(!b) return a;
//      return sum(a+b); 
//   }}
// console.log(sum(2)(3)(5)(6)())

// function curry()
// {
//     let total=0;
//     return function(value)
//     {
//         total=total+value;
//         console.log(total);
//     }
// }

// const sum=curry();
// sum(5)
// sum(3)
// sum(4)
// sum(6)


function generateSum(limit){
    function helper(...args) {
        if(limit===0){
            return ()=> 0;
        }
       if(args.length>=limit){
         const allowedArgs=args.slice(0,limit)
         return allowedArgs?.reduce((acc,curr)=>acc+curr,0);
       }else{
         return (...args2) => helper(...args,...args2)
       }
    }
    return helper;
}

const sum = generateSum(4);
console.log(sum(1)(2)(3)(4)); // 10

const sum1 = generateSum(2);
console.log(sum1(5)(1)); // 6 ✅ STOP HERE

const sum2 = generateSum(2);
console.log(sum2(5)(1, 1,9)); // 6

const sum3 = generateSum(0);
console.log(sum3(5)(1, 1,9)); 
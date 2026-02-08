const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;
const subtract3 = (x) => x - 3;
const toString = (x) => `${x}`;
function compose(...fns)
{
  return function(value)
  {
    return fns.reduceRight((x,fn)=>fn(x),value)
  }
}
const result1 = compose(add5, multiply2, subtract3)(10);// (10 + 5) * 2 - 3 = 27
console.log(result1);
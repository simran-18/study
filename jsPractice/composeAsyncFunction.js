const add = async (x) => {
  await new Promise(r => setTimeout(r, 500));
  return x + 2;
};

const multiply = async (x) => {
  await new Promise(r => setTimeout(r, 500));
  return x * 3;
};

const subtract = async (x) => {
  await new Promise(r => setTimeout(r, 500));
  return x - 1;
};
function composeAsync(...functions){
  return async function(initialValue) {
     let result=initialValue;
     let fns=[...functions].reverse();
     for(let fn of fns){
      result=await fn(result);
     }
     return result;
  }
}
const calculate = composeAsync(add, multiply, subtract);

calculate(5).then(console.log);

function memorize(fn)
{
  let cache={};
  return function(a,b)
  {
    let key=`${a}-${b}`;
    if(key in cache)
    {
      console.log("Returned from cache")
      return cache[key]
    }
    console.log("Computed");
    const result=fn(a,b)
    cache[key]=result;
    console.log(cache)
    return result;
  }
}

function sum(a,b){
    return a+b;
}
const memorizeSum=memorize(sum)
console.log(memorizeSum(2,3))
console.log(memorizeSum(2,3))
console.log(memorizeSum(6,3))
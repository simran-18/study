
function sampler(fn,n)
{
   let count=0;
   return function(...args)
   {
    count++;
    if(count%n===0)
    {
        fn.apply(this,args)
    }
   }
}
function message()
{
    console.log("Hello World!");   
}
const sample=sampler(message,2)
sample()
sample()
sample()
sample()
sample()
sample()
sample()
sample()
sample()
sample()
const btn=document.getElementById("test-btn")

function handleClick(){
    console.log("Hello")
}

function debounce(fn,delay,immediate = true){
   let timer;
   return function(...args){
    const callNow=immediate && !timer;
    clearTimeout(timer)
    timer=setTimeout(()=>{
        timer=null;
        if(!immediate)
        {
            console.log("Hello two")
            fn.apply(this,args)
        }
    },delay)
    if(callNow){
      console.log("Hello three")
      fn.apply(this,args)
    }
   }
};

const deboundeFn=debounce(handleClick,3000,false);
btn.addEventListener('click',deboundeFn);
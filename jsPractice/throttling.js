function handleResize() {
    console.log(window.innerHeight, window.innerWidth);
};

function throttling(fn, delay) {
    let lastCall = 0;
    let timerId = null;

    return function (...args) {
        const now = Date.now();
        if(!lastCall)
        {
            console.log("first")
            fn.apply(this,args)
            lastCall=Date.now();
        }
        else{
            clearTimeout(timerId);
            timerId =setTimeout(()=>
            {
              if(now-lastCall>=delay){
                 console.log("second")
                 fn.apply(this,args)
                 lastCall=Date.now();
              }
            },delay-(now-lastCall))         
        }
    };
}

const throttleFn = throttling(handleResize, 3000);
window.addEventListener('resize', throttleFn);

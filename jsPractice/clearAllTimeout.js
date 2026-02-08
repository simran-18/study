globalThis.timeoutIds=[];

const originalTimeout=globalThis.setTimeout;

globalThis.setTimeout=function(fn,delay)
{
    const id=originalTimeout(fn,delay);
    globalThis.timeoutIds.push(id)
    return id;
}
globalThis.clearAllTimeout=function(){
    while(globalThis.timeoutIds.length)
    {
        clearTimeout(globalThis.timeoutIds.pop())
    }
}

setTimeout(()=>{
 console.log("Hello 1")
},3000)
setTimeout(()=>{
 console.log("Hello 2")
},4000)
setTimeout(()=>{
 console.log("Hello 3")
},2000)
setTimeout(()=>{
 console.log("Hello 4")
},1000)
setTimeout(()=>{
 console.log("Hello 5")
},3000)
setTimeout(()=>{
 console.log("Hello 6")
},400)

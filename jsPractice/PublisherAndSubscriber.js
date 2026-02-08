function CreateObserver()
{
    this.subscribes=[];
    this.subscribe=function(fn)
    {
        if (typeof fn !== "function") return;
        this.subscribes.push(fn);

        return ()=>this.unsubscribe(fn);
   }
    this.unsubscribe=function(sub)
    {
        this.subscribes=this.subscribes.filter((fn)=>fn!==sub)
    }
    this.notify=function(data)
    {
        this.subscribes.forEach(fn => fn(data));
    }
}

const observer=new CreateObserver();
const fn1=(msg1)=>console.log("Fn1:",msg1)
const fn2=(msg1)=>console.log("Fn2:",msg1)
const user1= observer.subscribe(fn1);
// const user2= observer.subscribe(fn2);
observer.notify("Hello World !")
// user1()
observer.notify("After unsubscribe");
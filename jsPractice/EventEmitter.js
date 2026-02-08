class EventEmitter{
    constructor(){
      this.events={}
    }
    on(event,listener){
     if(!this.events[event]){
        this.events[event]=[]
     }
     this.events[event].push(listener);
    }
    emit(event,...args){
    if(!this.events[event]) return;
    this.events[event].forEach((listener)=>listener(...args))
    }
    off(event,listenerToRemove){
     if(!this.events[event]) return ;
      this.events[event]= this.events[event]
      .filter((listener)=>listener!==listenerToRemove)
    }
    once(event,listener){
       const wrapperFn=(...args)=>{
          listener(...args)
          this.off(event,wrapperFn);
       }
       this.on(event,wrapperFn)
    }
}


const emitter=new EventEmitter();

const greet=(name)=>console.log(`Hello ${name}`)
const greet1=(name)=>console.log(`Hello World! ${name}`)
emitter.on("greet",greet)
emitter.emit("greet","Alice");
emitter.once("greet",greet)
emitter.emit("greet","Alice");
emitter.emit("greet","BOB");
emitter.on("greet",greet1)
emitter.emit("greet","Simran")
emitter.off("greet",greet)
emitter.emit("greet","Bob")
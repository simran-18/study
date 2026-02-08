const STATE = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}
class MyPromise {
    #value = ""
    #state = STATE.pending;
    #thenCbs = []
    #catchCbs = []
    constructor(callback) {
        try {
            callback(this.#onSuccess, this.#onFailure)
        } catch (e) {
            this.#onFailure(e)
        }
    }

    #runMicroTask() {
        queueMicrotask(() => {
            if (this.#state === STATE.fulfilled) {
                this.#thenCbs.forEach((fn) => fn(this.#value))
                this.#thenCbs = [];
            }
            if (this.#state === STATE.rejected) {
                this.#catchCbs.forEach((fn) => fn(this.#value))
                this.#catchCbs = [];
            }
        })
    }

    #onSuccess = (value) => {
        if (this.#state !== STATE.pending) return;
        this.#state = STATE.fulfilled;
        this.#value = value;
        this.#runMicroTask();

    }
    #onFailure = (value) => {
        if (this.#state !== STATE.pending) return;
        if(this.#catchCbs.length)
        {
            throw new Error("Uncaught Promise")
        }
        this.#state = STATE.rejected;
        this.#value = value;
        this.#runMicroTask();
    }
    then = (thenCb, errCb) => {
        return new MyPromise((resolve,reject)=>{
            this.#thenCbs.push((value)=>{
                if(thenCb==null)
                {
                    resolve(value)
                    return
                }
                const res=thenCb(value)
                resolve(res)
            })
           this.#catchCbs.push((value)=>{
            if(errCb==null)
                {
                    reject(value)
                    return
                }
                const res=errCb(value)
                resolve(res)
           })
        this.#runMicroTask()
        })
    }
    catch = (cb) => {
        this.then(undefined,cb)
    }

    static resolve=(data)=>{
        return new MyPromise(function(resolve){
            resolve((data))
        })
    }
    static reject=(data)=>{
        return new MyPromise(function(_,reject){
            reject((data))
        })
    }
}
const promsie = new MyPromise(function (resolve, reject) {
    reject(1)
})
promsie.then((result)=>console.log(result))
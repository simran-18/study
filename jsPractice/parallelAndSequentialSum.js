function A(){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(2)},2000)
    })
}

function B(){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(3)},3000)
    })
}

async function parallelSum() {
    const [a,b]=await Promise.all([A(),B()])
    console.log("Parallel Sum :: " , a+b )
}
async function sequentialSum() {
    const a=await A();
    const b=await B();
    console.log("Sequential Sum :: " , a+b )
}
parallelSum()
sequentialSum()
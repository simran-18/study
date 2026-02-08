async function scheduleTasks(tasks,maxConcurrency){
  let currentIndex=0;
  let activeIndex=0;
  let result=[]
  return new Promise((resolve)=>{
    function next(){
        if(currentIndex===tasks.length && activeIndex===0)
        {
            resolve(result)
            return ;
        }
        while(currentIndex<tasks.length && activeIndex<maxConcurrency){
            let i=currentIndex;
            currentIndex++;
            activeIndex++;
            tasks[i]().then((res)=>{
                result[i]=res; 
            }).catch((err)=>{
                result[i]=err;
            }).finally(()=>{
                activeIndex--;
                next();
            })
        }   
    }
    next();
  })
}

const tasks = [
  () => new Promise(res => setTimeout(() => res("A done"), 3000)),
  () => new Promise(res => setTimeout(() => res("B done"), 2000)),
  () => new Promise(res => setTimeout(() => res("C done"), 1000)),
  () => new Promise(res => setTimeout(() => res("D done"), 1500)),
];

scheduleTasks(tasks, 2).then(results => {
  console.log("All tasks finished:", results);
});
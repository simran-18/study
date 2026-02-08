function counter(init,steps){
   let count=init;
   let intervalId=null;

   return {
     startTime(){
        if (intervalId !== null) return;
        intervalId=setInterval(()=>{
           count=count+steps;
           console.log("count is ::: ",count)
        },1000);
     },
     stopTimer(){
        clearInterval(intervalId);
        intervalId=null;
     },
     resetTimer(){
        count=0;
        clearInterval(intervalId);
        intervalId=null;
     }
   }
}

const counter1=counter(1,2);
counter1.startTime()
setTimeout(() => {
    counter1.stopTimer();
    console.log("Stopped first time");

    // Reset AFTER stopping
    counter1.resetTimer();
    console.log("Reset done");

    // Restart after 1 sec
    setTimeout(() => {
        counter1.startTime();

        // Stop again after 2 sec
        setTimeout(() => {
            counter1.stopTimer();
            console.log("Stopped second time");
        }, 2000);

    }, 1000);

}, 3000);
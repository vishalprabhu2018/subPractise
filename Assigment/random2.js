randomNum=(delay)=>{
 let remainTime=delay;

const progressInterval= setInterval(()=>{
    console.log(`Remaining time is ${remainTime} ....`);
    remainTime--;

    if (remainTime<1){
        clearInterval(progressInterval);
        console.log(`Random number generated: ${ Math.floor(Math.random()*100)}`);
       }
}, 1000);
   
} 


randomNum(11);



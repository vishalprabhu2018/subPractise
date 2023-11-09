const higherOrder=n=>{
    const oneFun=m=>{
        const twoFun=p=>{
            return n+m+p;
        }
        return twoFun;
    }
    return oneFun;
}


console.log(higherOrder(1)(2)(3))


const myNums=[1,2,3,4]


sumArr=(arr)=>{
    let total =0;
    arr.map((element) =>{
         total+=element;
    })
    return total;
}

console.log(sumArr(myNums));

function oneMoreHello(){
    console.log('ola');
}

// setInterval(oneMoreHello,1000);

setTimeout(oneMoreHello,2000);


let arr=[1,2,3,4];

arr.forEach((element, index, arr)=>{
    console.log(element, index, arr);
})
//similary maps

let heros=['Vishal', 'Vikas', 'Venkatesh', 'Prathvik'];

const herosWithTesh=heros.filter((h)=>{

    return h.endsWith('tesh');   //if return is not written. Output will be empty array.

});
console.log(herosWithTesh);



//shopping cart

const cartBills=[20,30,50]

const sum=cartBills.reduce((prev, curr)=> prev + curr, 0);
console.log(sum);


const gameScore=[200,330,400];

const gameScoreCheck=gameScore.every((v)=>typeof v === 'number');
console.log(gameScoreCheck);


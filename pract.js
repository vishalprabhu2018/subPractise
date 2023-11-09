

// function sum(a,b){
//      a=5;
//      b=10;

// let result=a+b;

// return result;

// }


// console.log(sum(5,5));



// ((c,d)=>{
//     this.c=c;
//     this.d=d;
//     console.log(this);
// })(5,5);


// ((c,d)=>{
//     this.c=c;
//     this.d=d;
//     console.log(this);
// })(10,5);



// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });



// //write function that allows you to do this

// let addSix=createBase(6);
// addSix(10);
// addSix(21);

// function createBase(nums){

//      return function (innerNums){
//          console.log(innerNums+nums);
//      }
     
// }

// x='John';
// y= + x;

// console.log(typeof(y));


function myAdd(arr){
    arr[1]++;
   return arr=arr+arr;
}

a=new Array(1,3,2,5);
console.log(myAdd(a));


let arr=[3,4,3,5,9];

function getLargest(arr,n){
    let largest=0;

     for(i=1; i<n; i++){
        if(arr[i]<arr[largest]){
            largest=i;
    

        }
     }
     return largest;
      
}

console.log(getLargest([1,2,3,4],3));


function getlar(arr){
    let max=Math.max(...arr);
    let index=arr.indexOf(max);

    return index;

}
console.log(getlar([1,97,5,3,9]))
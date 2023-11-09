
//Add two arrays
let arr1=[1,2,3];
let arr2=[3,4,5];

let result=[];

for(i=0;i<arr1.length; i++){
    result.push(arr1[i]+arr2[i]);
}

// console.log(arr);
console.log(result);


//Method two

let result2=arr1.map((element,index)=>{return element+arr2[index]});
console.log(result2);




//Truthy value

arr3=[1,2,null, undefined, '',0,'0'];


let val=arr3.filter((value)=>{return value});
console.log(val);
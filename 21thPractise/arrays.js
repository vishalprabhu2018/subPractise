const oneArray=[1,2,3,4,5];
const twoArray=[6,7,8,9,10];

// const threeArray= oneArray+ twoArray;  //Wrong method

// const threeArray=oneArray.concat(twoArray);


// const  threeArray=[oneArray,twoArray];   //  to spread the element of the array  we have use some method or  operator

const threeArray=[...oneArray,...twoArray]
console.log(threeArray[6]);


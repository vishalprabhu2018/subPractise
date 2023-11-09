function printAr(arr){
    const [first,second,,,last]=arr;
    return [first, second, last];
}

console.log(printAr([1,2,3,4,5,6,7,8]));
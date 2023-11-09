function bubbleSort(arr){
    const n=arr.length;

    for(let i=0;i<n-1;i++){
        let flag=0;
           for(let j=0;j<n-i-1; j++)
           {
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1]
                arr[j+1]=temp;
                let flag=1;
                
            }
           }
           if(flag=1){
            break;
           }
    }
    return arr
}


let arr2=[3,9,4,5];

console.log(bubbleSort(arr2));
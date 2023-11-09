function wordCount(word){
   let arr=word.split(' ');
  
   let count=new Map();

   for(el of arr){
        if (count.has(el)){
         count.set(el, count.get(el)+1)
        }
        else{
            count.set(el,1)

        }
   }
   return count;
}

console.log(wordCount('vishal is a good boy and is a'));



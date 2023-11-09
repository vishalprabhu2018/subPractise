
  const reverseString=(str)=>{
    let newString='';
      for(let i=str.length-1; i>=0; i--){
          newString+=str[i]
      } 
      return newString
  }




// console.log(reverseString('vishal'));


// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
  function delayedReverse(input) {
    setTimeout(()=> {
      const reversed = reverseString(input);
      console.log(reversed);
    }, 2000); // 2000 milliseconds = 2 seconds
  }
  
  const input = "Hello, World!";
  delayedReverse(input);
  
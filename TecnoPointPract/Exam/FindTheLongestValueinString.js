function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}


console.log(longestWord("Vishal Prabhu is a good bod"));



// function long(string){
//     let str=string.split('');
//     let longest=0;
//     let word=null;
    
//     str.map((element)=>{
//          if (longest<str[element].length)
//          longest=str[element].length;
//          word=str[element];
//          return word;
//     })

// }

// console.log(long('vishal prabhu'))


let name='vishal Prabhu is a goood boy';
let op=name.split(" ");
let op2=op.join("  ");
console.log(op);
console.log(op2)
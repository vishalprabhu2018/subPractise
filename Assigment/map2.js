

let item=[{item:1,price$:20}, {item:2,price$:30 }, {item:3,price$:10}];

let op=item.map((item)=>{
return{ item:(item.item),priceRs:(item.price$*80)}

})  

console.log(op);




//convert's from array to object
// const object= Object.assign({}, op)
// console.log(object);

// const arr3=[{name:'bubble game', link:'https://vishalprabhu2018.github.io/bubbleGame/'},{name:'google', link:'https://vishalprabhu2018.github.io/bubbleGame/'}]

// function makeCard3(arr){
//     item=''
//     let op=arr.forEach((element)=>{
//        item+=`${element.name} ,${element.link} `
//     })
//      console.log(item);

// }

// console.log(makeCard3(arr3));


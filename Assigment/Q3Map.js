const store=[{item:1, price:5},{item2:2,price:10},{item3:3,price:15}]

function converter(price){
    return price*80;
}

let indianStore=store.map((item)=>({
...item,
price:converter(item.price)
}))

console.log(indianStore);
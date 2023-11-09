const set1=new Set();


console.log(set1.add("India"))
console.log(set1.add(2));
console.log(set1.add(1929));

console.log(set1.size);


setA=new Set();
setB=new Set();

setA.add('vishla');
setB.add(1);
setA.add(2);
setB.add(2);
function intersection(setA, setB) {
    const _intersection = new Set();
    for (const elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem);
      }
    }
    return _intersection;
  }


  console.log(intersection(setA, setB));


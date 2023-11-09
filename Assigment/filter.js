// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const books = [
    { title: 'Book 1', author: 'vishal', year: 2005 },
    { title: 'Book 2', author: 'vikas', year: 2015 },
    { title: 'Book 3', author: 'chotu', year: 2009 },
    { title: 'Book 4', author: 'motu', year: 2012 },
    // Add more books as needed
  ];

  function capitalfirstLetter(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  
  let op=books.filter((books)=>{
      return books.year<2010
  })
  .map((op)=>{
     return {author:capitalfirstLetter(op.author), year:(op.year)};
  })

  
  console.log(op);


  
    function first(){
 let args= Array.from(arguments)
 let finalArr=args.map(e=>e);
 console.log(finalArr);
    }

    first(1,2,3);



    function second(){
        let args= Array.from(arguments)
        console.log(args);
           }
       
           second(1,2,3);




    function third(...args){
     console.log(args);

    }
   third(1,2,3);
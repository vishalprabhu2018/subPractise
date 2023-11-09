
const url='https://api.github.com/users/prabhuvishal2018';
const xhs= new XMLHttpRequest();
xhs.open('GET',url);

xhs.onreadystatechange=function(){
    if(this.readyState===4){
   const data=JSON.parse(this.response);
   console.log(data.id);

    }
}


xhs.send();


function setUsername(username){
    this.username=username;
    console.log("called");
}


function createUsername(username, email, password){
    setUsername.call(this,username);
    this.email=email;
    this.password=password;
}

const output =new createUsername('vishal','prabhuvishal2018@gmail.com', '123');
console.log(output);

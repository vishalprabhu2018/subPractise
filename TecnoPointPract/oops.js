function user(username, loggedin, isActive){
    this.username=username;
    this.loggedin=loggedin;
    this.isActive=isActive;
    this.greeting= function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

// const user1=user('vishal', true, false);
// const user2=user('vikas', true, true);

// So to handle above problem new keyword of constructor function is used to create new instance

 const user1= new user('vishal', true, false);
const user2= new user('vikas', true, true);



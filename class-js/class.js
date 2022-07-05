// https://youtu.be/Ug4ChzopcE4
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }

}
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    login = () => `${this.email} has logged in`;
    logout = () => `${this.email} has logged out`;
}
userOne.login();
userOne.logout();
const user1 = new User("Bill", "bill@thehill.com")
console.log(user1.logout())
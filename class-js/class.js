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
        this.score = 0;
    }
    login = () => `${this.email} has logged in`;
    logout = () => `${this.email} has logged out`;
    updateScore(){
        this.score++;
        return `${this.email} Score is now ${this.score}`
    }
}
userOne.login();
userOne.logout();
const user1 = new User("Bill", "bill@thehill.com")
console.log(user1.logout())
// let prop = 'name'
// console.log(userOne[prop])
// prop = 'email'
// console.log(userOne[prop])
console.log(user1.updateScore())
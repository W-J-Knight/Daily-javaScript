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
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         this.score = 0;
//     }
//     login = () => `${this.email} has logged in`;
//     logout = () => `${this.email} has logged out`;
//     updateScore(){
//         this.score++;
//         return `${this.email} Score is now ${this.score}`
//     }
// }
class User{
    constructor(name, email,){
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.email} has logged in`);
        return this//return this for chaining
    } 
    logout(){
        console.log( `${this.email} has logged out`);
        return this//return this for chaining
    }
    updateScore(){
        this.score++;
        console.log(`${this.email} Score is now ${this.score}`)
        return this//return this for chaining
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user1.email
        })
    }
}


userOne.login();
userOne.logout();
const user1 = new User("Bill", "bill@thehill.com");
const user2 = new User("John", "smith@email.com");
const admin1 = new Admin("admin", "admin@email.com");
console.log(user1.logout());
// let prop = 'name'
// console.log(userOne[prop])
// prop = 'email'
// console.log(userOne[prop])
console.log(user1.updateScore())
user1.login().updateScore().updateScore().logout()
let users = [user1,user2]
admin1.deleteUser(user1);
console.log(users)
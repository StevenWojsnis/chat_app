

//addUser(id,name,room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    console.log(this.users);
    this.users.push(user);
    console.log(this.users)
    return user;
  }

  removeUser (id) {
    var user = this.getUser(id);

    if(user){
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }

  getUser (id) {
    var userToRetrieve = this.users.filter((user) => user.id === id);
    return userToRetrieve[0];

    // return this.users.filter((user) => user.id === id)[0]
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }

}

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription(){
//     return `${this.name} is ${this.age} year(s) old`;
//   }
// }
//
// var me = new Person('Steve', 25);
// console.log('this.name', me.name);
// console.log('this.age', me.age);
// var description = me.getUserDescription();
// console.log(description);

module.exports = {Users}

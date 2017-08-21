const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id:'1',
      name:'Mike',
      room:'Node Course'
    }, {
      id:'2',
      name:'Jen',
      room:'React Course'
    }, {
      id:'3',
      name:'Julie',
      room:'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();

    var user = {
      id: '123',
      name: 'Steve',
      room: 'Test room'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');
    expect(user.name).toBe('Mike');
    expect(users).toNotInclude(user);
  });

  it('should not remove user', () => {
    var user = users.removeUser('11');
    expect(user).toNotExist();
  });

  it('should find user', () => {
    var user = users.getUser('1');
    expect(user.name).toBe('Mike');
  });

  it('should not find user', () => {
    var user = users.getUser('11');
    expect(user).toNotExist();
  });

  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });
})

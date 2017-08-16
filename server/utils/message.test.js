const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'Steven';
    const text = 'Test text';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Admin';
    const latitude = 1;
    const longitude = 2;

    var location = generateLocationMessage(from, latitude, longitude);

    expect(location.from).toBe('Admin');
    expect(location.url).toBe('https://www.google.com/maps?q=1,2');
    expect(location.createdAt).toBeA('number');
  });
});

const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const testValue = {};
    expect(isRealString(testValue)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const testValue = '  ';
    expect(isRealString(testValue)).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    const testValue = ' f  ';
    expect(isRealString(testValue)).toBe(true);
  });
});

const assert = require('chai').assert;
const { myMap, perms } = require('../array');

describe('Array', function() {
  describe('myMap', function() {
    it('return a modified array based on function', function() {
      assert.deepEqual(myMap([1,2,3], (el) => {
        return el + 1;
      }), [2,3,4]);
    })
  })
  
})
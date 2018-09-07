const {assert, expect} = require('chai');
const { myMap, perms } = require('../array');

describe('Array', function() {
  describe('myMap', function() {
    it('return a modified array based on function', function() {
      assert.deepEqual(myMap([1,2,3], (el) => {
        return el + 1;
      }), [2,3,4]);
    })
  })
  describe('perms', function() {
    it('checks if input is an array', function() {
      assert.equal(perms("hi"), "Not an Array");
    })
    it('returns an empty array if input is an empty array', function() {
      assert.deepEqual(perms([]), []);
    })
    it('returns the array if the array has only one element', function() {
      assert.deepEqual(perms([1]), [1]);
    })
    it('returns permutations for arrays with multiple elements', function() {
      assert.deepEqual(perms([1,2]), [[1,2],[2,1]]);
    })
    it('returns permutations for larger arrays', function () {
      assert.deepEqual(perms([1,2,3]), [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
    })
  })
})
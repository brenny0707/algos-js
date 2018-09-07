const {assert, expect} = require('chai');
const { myMap, perms, quickSort, mergeSort } = require('../array');

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
    it('returns permutations for larger arrays', function () {
      assert.deepEqual(perms([1, 2, 3]), [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
    })
  })
  describe('sorts', function() {
    describe('quicksort', function() {
      it('handles an empty array', function() {
        assert.deepEqual(quickSort([]), []);
      })
      it('handles an array with 1 element', function() {
        assert.deepEqual(quickSort([1]), [1]);
      })
      it('handles an array with multiple elements', function () {
        assert.deepEqual(quickSort([3,6,2,9,10,3]), [2,3,3,6,9,10]);
      })
      it('handles an array with multiple elements with its own comparator function', function () {
        const testComparator = ((a, b) => {
          if (a < b) return 1;
          else if (a === b) return 0;
          else return -1;
        });
        assert.deepEqual(quickSort([3,6,2,9,10,3], testComparator), [10,9,6,3,3,2]);
      })
    })
    describe('mergesort', function() {
      it('handles an empty array', function () {
        assert.deepEqual(mergeSort([]), []);
      })
      it('handles an array with 1 element', function () {
        assert.deepEqual(mergeSort([1]), [1]);
      })
      it('handles an array with multiple elements', function () {
        assert.deepEqual(mergeSort([3, 6, 2, 9, 10, 3]), [2, 3, 3, 6, 9, 10]);
      })
      it('handles an array with multiple elements with its own comparator function', function () {
        const testComparator = ((a, b) => {
          if (a < b) return 1;
          else if (a === b) return 0;
          else return -1;
        });
        assert.deepEqual(mergeSort([3, 6, 2, 9, 10, 3], testComparator), [10, 9, 6, 3, 3, 2]);
      })
    })
  })
})
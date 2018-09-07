//myMap, take an array and return a modified array based on callback
function myMap(arr, func) {
  const mappedArr = [];
  arr.forEach( (el) => {
    mappedArr.push(func(el));
  });
  return mappedArr;
}

//Permutation, find all permutations of an array(assume all elements are unique or if there are duplicates, include them again)
function perms(arr) {
  if (!Array.isArray(arr)) return "Not an Array";
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  const finalPerms = [];
  arr.forEach( (el, idx) => {
    const first = el;
    const rest = arr.slice(0, idx).concat(arr.slice(idx + 1));
    const restPerms = perms(rest);
    restPerms.forEach( (perm) => {
      finalPerms.push([first].concat(perm));
    });
  });
  return finalPerms;
}


/**
 * Sorting algorithims
 */

const testComparator = ( (a,b) => {
  if (a < b) return -1;
  else if (a === b) return 0;
  else return 1;
});

function quickSort(arr, comparator) {
  if (!comparator) {
    comparator = testComparator;
  }
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const rest = arr.slice(1);
  const left = [];
  const right = [];
  while (rest.length > 0) {
    comparator(rest[0], pivot) !== 1 ?
      left.push(rest.shift()) :
      right.push(rest.shift());
  }
  return quickSort(left, comparator).concat([pivot], quickSort(right, comparator));
}

function mergeSort(arr, comparator) {
  if (!comparator) {
    comparator = testComparator;
  }
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), comparator);
  const right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);

  function merge(left, right, comparator) {
    const merged = [];
    while (left.length > 0 && right.length > 0) {
      comparator(left[0], right[0]) !== 1 ?
        merged.push(left.shift()) :
        merged.push(right.shift());
    }
    return merged.concat(left, right);
  }
}

module.exports = {
  myMap: myMap,
  perms: perms,
  quickSort: quickSort,
  mergeSort: mergeSort,
};

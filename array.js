//myMap, take an array and return a modified array based on callback
function myMap(arr, func) {
  const mappedArr = [];
  arr.forEach( (el) => {
    mappedArr.push(func(el));
  });
  return mappedArr;
}

//myMap tests
// console.log(myMap([1,2,3,4,5], function(num) {return num + 1}));

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

//perm tests
// console.log(perms("hi there"));
// console.log(perms([]));
// console.log(perms([1]));
// console.log(perms([1,2]));
// console.log(perms([1,2,3]));
// console.log(perms([1,2,3,4,5]));

module.exports = {
  myMap: myMap,
  perms: perms,
};

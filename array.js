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

/**
 * Matricies
 */


 /**
  * 
  * @param {Array[String]} dict 
  * @param {2D Array} board 
  * words must be greater than length 3
  */
function validPos(pos, maxPos) {
  return pos <= maxPos;
}

function boggleCheck(dict, board) {
  const valids = [];
  const boardCharSize = board.length * board[0].length;

  dict.forEach( (word) => {
    if (word.length >= 3 && word.length <= boardCharSize && isValidWord(word, board)) valids.push(word);
  })
  return valids;

  function isValidWord(word, board, xPos = null, yPos = null, isSeen = {}) {
    if (word.length === 0) return true;
    if (word === "bba") {
      console.log(isSeen);
    }
    let nextCoords = [];
    //check each character
    const firstCh = word.charAt(0);
    if (!xPos || !yPos) {
      //initialize first locations
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] === firstCh) {
            nextCoords.push([i, j]);
          }
        }
      }
    }
    else {
      //utilize xPos and yPos for adjs
      const adjCoords = [
                          [yPos - 1, xPos],
                          [yPos + 1, xPos],
                          [yPos, xPos - 1],
                          [yPos, xPos + 1],
                          [yPos - 1, xPos - 1],
                          [yPos - 1, xPos + 1],
                          [yPos + 1, xPos - 1],
                          [yPos + 1, xPos + 1],
                        ];
      const boardMaxX = board[0].length - 1;
      const boardMaxY = board.length - 1;
      adjCoords.forEach( (coords) => {
        const y = coords[0];
        const x = coords[1];
        if ( (!isSeen[y] || !isSeen[y][x]) && validPos(y, boardMaxY) && validPos(x, boardMaxX) && board[y][x] === firstCh) {
          nextCoords.push([y, x]);
        }
      })
    }

    //recurse on nextCoords
    const cutWord = word.slice(1);
    if (nextCoords.length === 0) return false;
    for (let i = 0; i < nextCoords.length; i++) {
      const curCoords = nextCoords[i];
      const newXPos = curCoords[1];
      const newYPos = curCoords[0];
      const seenCurObj = {};
      if (seenCurObj[newYPos]) {
        seenCurObj[newYPos] = {};
        seenCurObj[newYPos][newXPos] = true;
      }
      const newSeen = Object.assign(isSeen, seenCurObj);
      if (isValidWord(cutWord, board, newXPos, newYPos, newSeen)) return true;
    }
    return false;
  }
}

module.exports = {
  myMap: myMap,
  perms: perms,
  quickSort: quickSort,
  mergeSort: mergeSort,
  boggleCheck: boggleCheck,
};

function isUnique(str) {
  //assuming str contains only a-z
  if (str.length > 26) return false;
  const isSeen = {};
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);
    if (isSeen[ch]) return false;
    else isSeen[ch] = true;
  }
  return true;
  /**
   * Time complexity: 0(c) where c = number of characters in set, ex: a-z = 26, ASCII = 128, etc
   * Space complexity: 0(c) as well, since isSeen only can increase as large as c before returning false on next iteration
   */
}

function oneAway(str1, str2) {
  //checks if two strings can be equal if you can insert, delete, or replace 1 character in one of the two strings
  if (str1 === str2) return true;
  let differenceCounter = 0;
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      const ch1 = str1.charAt(i);
      const ch2 = str2.charAt(i);
      if (ch1 !== ch2) {
        if (differenceCounter > 0) return false;
        else differenceCounter++;
      }
    }
  }
  else {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    else {
      const short = str1.length < str2.length ?
        str1 :
        str2;
      const long = str1.length < str2.length ?
        str2 :
        str1;
      let longChOffset = 0;
      for (i = 0; i < short.length; i++) {
        const shortCh = short.charAt(i);
        const longCh = long.charAt(i + longChOffset);
        if (shortCh !== longCh && differenceCounter > 0) return false;
        else if (shortCh !== longCh) {
          differenceCounter++;
          longChOffset++;
          const nextLongCh = long.charAt(i + longChOffset);
          if (nextLongCh !== shortCh) return false;
        }
      }
    }
  }
  return true;
}

/**
 * Time complexity: Worst case is 0(n) where n is the length of the short string
 * Space complexity: 0(1) due to no dynamic data structure creation
 */

function stringPalindromePermutation(str) {
  const countObj = {};
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i).toLowerCase();
    if (countObj[ch]) countObj[ch]++;
    else countObj[ch] = 1;
  }
  /**
   * oddConditional helps compile the odd/even scenario for a string palindrome
   * if str.length is odd, you expect ONLY ONE character to have an odd # of counts
   *    you start oddConditional with a default value of false, and once you run into the first odd instance, any              subsequent odd instances means you cannot have a palindrome
   * if str.length is even, you don't want any instances of odd character counts, so you default oddConditional to true, so any (the first) odd instance you run into should automatically return false 
   */
  let oddConditional = false;
  if (str.length % 2 === 0) oddConditional = true;
  //Need to break keys into new array and for loop rather than forEach, since the return doesn't actually stick inside a forEach
  const keys = Object.keys(countObj);
  for (let j = 0; j < keys.length; j++) {
    const chCount = countObj[keys[j]];
    if (chCount % 2 === 1) {
      if (oddConditional) return false;
      else oddConditional = true;
    }
  }
  return true;
}
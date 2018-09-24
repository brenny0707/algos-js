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
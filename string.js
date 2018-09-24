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

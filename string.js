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
}

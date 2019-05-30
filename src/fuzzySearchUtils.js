/**
 * Returns whether or not the short string is a fuzzy match
 * with the long string.
 *
 * A word fuzzy matches with another word if all of the
 * letters in the word appear in the same order in the other word.
 *
 * @param {string} shortStr the short string
 * @param {string} longStr the long string
 * @return {boolean} whether or not the short string is a
 *    fuzzy match with the long string
 */
export function fuzzyMatch(shortStr, longStr) {
  let n = -1;
  for (let i = 0; i < shortStr.length; i++) {
    const curLetter = shortStr[i];
    n = longStr.toLowerCase().indexOf(curLetter, n + 1);
    if (n === -1) {
      return false;
    }
  }
  return true;
}

/**
 * Returns a subset of the array of objects passed in whose .title property
 * fuzzy match with the given comparison string.
 *
 * @param {string} comparisonString the string to match
 * @param {array} itemsToSearch the objects with .title properties to match
 *    with the comparisonString
 * @return {array} a subset of the itemsToSearch that match the comparisonString
 */
export function fuzzySearch(comparisonString, itemsToSearch) {
  const lowerCompStr = comparisonString.toLowerCase();
  return itemsToSearch.filter((item) => fuzzyMatch(lowerCompStr, item.title));
}

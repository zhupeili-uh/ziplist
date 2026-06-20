/**
 * Alternates taking elements from two lists of equal length using a standard loop.
 */
function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

/**
 * Alternates taking elements from two lists of equal length using functional programming.
 */
function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  // Using reduce to accumulate the alternating elements into a single array
  return list1.reduce((acc: unknown[], currentElement, index) => {
    acc.push(currentElement, list2[index]);
    return acc;
  }, []);
}

// Test cases
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
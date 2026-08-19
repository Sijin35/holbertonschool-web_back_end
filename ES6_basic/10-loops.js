export default function appendToEachArrayValue(array, appendString) {
  const values = [];
  for (const val of array) {
    const value = appendString + val;
    values.push(value);
  }

  return values;
}
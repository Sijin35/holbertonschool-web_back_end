export default function appendToEachArrayValue(array, appendString) {
  let arra =[]
  for (let idx of array) {
    let value = idx;
    arra[idx] = appendString + value;
  }

  return arra;
}

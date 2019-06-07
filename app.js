
// fakeFilter function

function fakeFilter(arr, callback) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i]);
    if (result) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

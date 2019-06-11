//fakeEvery
function fakeEvery(array, elements) {
  for (let i = 0; i < array.length; i++) {
    if (elements(array[i]) != true) {
      return false;
    }
  }
  return true;
}

//fakeIncludes function
function fakeIncludes(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return true;
    }
  }
  return false;
}

// fakeForEach function

function fakeForEach(arr, callback) {
  for (let element of arr) {
    callback(element);
  }
}

// fakeFilter function

function fakeFilter(arr, callback) {
  let filtered = [];
  fakeForEach(arr, element => {
    if (callback(element)) {
      filtered.push(element);
    }
  });
  return filtered;
}

// fakeSome function

function fakeSome(arr, func) {
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return true;
    }
  }
  return false;
}

// fakeFind function

function fakeFind(arr, callback) {
  for (let element of arr) {
    if (callback(element)) {
      return element;
    }
  }
}

// fakeIntersection function

function intersection(arr1, arr2) {
  let intersectionArr = [];
  fakeForEach(arr2, element => {
    if (arr1.indexOf(element) >= 0) {
      intersectionArr.push(element);
    }
  });
  return intersectionArr;
}

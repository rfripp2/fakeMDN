//fakeEvery

function fakeEvery(arr, callback) {
  let trusthyArr = [];
  fakeForEach(arr, element => {
    if (callback(element)) {
      trusthyArr.push(element);
    }
  });
  return trusthyArr.length == arr.length;
}

//fakeIncludes function

function fakeIncludes(arr, element) {
  let indexed = fakeIndexOf(arr, element);
  if (indexed > -1) {
    return true;
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

function fakeSome(arr, callback) {
  let filteredS = fakeFilter(arr, callback);
  if (filteredS.length > 0) {
    return true;
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

function fakeIntersection(arr1, arr2) {
  let intersectionArr = [];
  fakeForEach(arr1, element => {
    if (arr2.indexOf(element) >= 0) {
      intersectionArr.push(element);
    }
  });
  return intersectionArr;
}

// fakeUnion function

function fakeUnion(arr1, arr2) {
  let unionArr = [];
  let intersectionArr = fakeIntersection(arr1, arr2);
  fakeForEach(intersectionArr, element => {
    if (unionArr.indexOf(element) == -1) {
      unionArr.push(element);
    }
  });
  return unionArr;
}

// fakeIndexOf function (iterative)

function fakeIndexOf(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return i;
    }
  }
  return -1;
}

// fakeReduce function

function fakeReduce(arr, callback, initial) {
  let accumulator = initial || 0;
  fakeForEach(arr, element => {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
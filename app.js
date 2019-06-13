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
  for (let i = 0; i < arr.length; i++) {
    let result = callback(arr[i]);
    if (result) {
      filtered.push(arr[i]);
    }
  }
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

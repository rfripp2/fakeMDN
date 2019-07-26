//_every

Array.prototype._every = _every;
function _every(callback) {
  let trusthyArr = [];
  this._forEach(element => {
    if (callback(element)) {
      trusthyArr.push(element);
    }
  });
  return trusthyArr.length == this.length;
}


//fakeIncludes function

function fakeIncludes(arr, element) {
  let indexed = fakeIndexOf(arr, element);
  if (indexed > -1) {
    return true;
  }
  return false;
}

// _forEach function
Array.prototype._forEach = _forEach;
function _forEach(callback) {
  for (let element of this) {
    callback(element);
  }
}



// _filter function

Array.prototype._filter = _filter;
function _filter(callback) {
  let filtered = [];
  this._forEach(element => {
    if (callback(element)) {
      filtered.push(element);
    }
  });
  return filtered;
}


// _some function

Array.prototype._some = _some;
function _some(callback) {
  let filteredS = this._filter(callback);
  if (filteredS.length > 0) {
    return true;
  }
  return false;
}

// _find function

Array.prototype._find = _find;
function _find(callback) {
  for (let element of this) {
    if (callback(element)) {
      return element;
    }
  }
}


//function _map()

Array.prototype._map = _map;
function _map(callback) {
  const mappedArray = [];
  this._forEach(element => {
    mappedArray.push(callback(element));
  });
  return mappedArray;
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

//fakeIndexOf function (recursive)

function fakeIndexOfRecursive(arr, element, i = 0) {
  if (arr.length < i) {
    return -1;
  }
  if (element == arr[i]) {
    return i;
  }
  return fakeIndexOfRecursive(arr, element, (i += 1));
}

// fakeReduce function

function fakeReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  fakeForEach(arr, element => {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
}

// fakeSum function

function fakeSum(arr) {
  let total = fakeReduce(
    arr,
    function(a, b) {
      return a + b;
    },
    0
  );
  return total;
}

function fakeArrayMax(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  if (arr[0] >= arr[1]) {
    arr.splice(1, 1);
  }
  if (arr[0] <= arr[1]) {
    arr.splice(0, 1);
  }
  if (arr.length == 0) {
    return undefined;
  }

  return fakeArrayMax(arr);
}

function fakeArrayMin(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  if (arr[0] <= arr[1]) {
    arr.splice(1, 1);
  }
  if (arr[0] >= arr[1]) {
    arr.splice(0, 1);
  }
  if (arr.length == 0) {
    return undefined;
  }

  return fakeArrayMin(arr);
}

function fakeFindIndex(array, callback) {
  for (var i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

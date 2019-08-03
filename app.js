//_every method

Array.prototype._every = function(callback) {
  for (const element of this) {
    if (!callback(element)) {
      return false;
    }
  }
  return true;
};


//fakeIncludes function

function fakeIncludes(arr, element) {
  let indexed = fakeIndexOf(arr, element);
  if (indexed > -1) {
    return true;
  }
  return false;
}

// _forEach method
Array.prototype._forEach = function(callback) {
  for (const element of this) {
    callback(element);
  }
};



// _filter method

Array.prototype._filter = function(callback) {
  const filtered = [];
  this._forEach(element => {
    if (callback(element)) {
      filtered.push(element);
    }
  });
  return filtered;
};

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


// _map method

Array.prototype._map = function (callback) {
  const mappedArray = [];
  this._forEach(element => {
    mappedArray.push(callback(element));
  });
  return mappedArray;
}



// _intersection method

Array.prototype._intersection = function(arr) {
  const intersectionArr = [];
  this._forEach(element => {
    if (arr.indexOf(element) >= 0) {
      intersectionArr.push(element);
    }
  });
  return [...new Set(intersectionArr)];
};



// _union method

Array.prototype._union = function(arr) {
  return [...new Set([...this, ...arr])];
};

// fakeIndexOf function (iterative)

Array.prototype._indexOf = _indexOf;
function _indexOf(element) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == element) {
      return i;
    }
  }
  return -1;
}

//_indexOfRecursive method

Array.prototype._indexOfRecursive = function(element, i = 0) {
  if (this.length < i) {
    return -1;
  }
  if (element == this[i]) {
    return i;
  }
  return this._indexOfRecursive(element, (i += 1));
};

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

// _arrayMax method

Array.prototype._arrayMax = function() {
  if (this.length == 1) {
    return this[0];
  }
  if (this[0] >= this[1]) {
    this.splice(1, 1);
  }
  if (this[0] <= this[1]) {
    this.splice(0, 1);
  }
  if (this.length == 0) {
    return undefined;
  }

  return this._arrayMax();
};


// _arrayMin method
Array.prototype._arrayMin = function() {
  if (this.length == 1) {
    return this[0];
  }
  if (this[0] <= this[1]) {
    this.splice(1, 1);
  }
  if (this[0] >= this[1]) {
    this.splice(0, 1);
  }
  if (this.length == 0) {
    return undefined;
  }

  return this._arrayMin();
};


function fakeFindIndex(array, callback) {
  for (var i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

// fakeLastIndexOf function

function fakeLastIndexOf(arr, element) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

// fakeAreEqual function

function fakeAreEqual(arr1, arr2, i = 0) {
  if (i > arr1.length - 1 && arr1.length == arr2.length) {
    return true;
  }

  if (arr1[i] !== arr2[i]) {
    return false;
  }

  return areEqual(arr1, arr2, i + 1);
}

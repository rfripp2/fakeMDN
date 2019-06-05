function fakeEvery(array, elements) {
  for (let i = 0; i < array.length; i++) {
    if (elements(array[i]) != true) {
      return false;
    }
  }
  return true;
}

fakeEvery([12, 3, 98, 16], numbers => numbers < 99);

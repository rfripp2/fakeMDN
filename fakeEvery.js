function fakeEvery(valorLimite, arrEvery) {
  return valorLimite < 40;
}

let arrEvery = [4, 10, 13, 18, 22, 17, 33];

console.log(arrEvery.every(fakeEvery));

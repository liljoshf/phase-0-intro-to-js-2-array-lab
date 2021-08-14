const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
cats.push("Ralph");
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyPrependCat(name) {
cats.unshift("Bob");
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyRemoveLastCat(name) {
cats.pop();
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function appendCat(name) { 
const catArrayCopy = [...cats]
catArrayCopy.push(name)
return catArrayCopy
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function prependCat(name) {
const catArrayCopy = [...cats]
catArrayCopy.unshift(name)
return catArrayCopy
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function removeLastCat(name) {
const catArrayCopy = [...cats]
catArrayCopy.pop()
return catArrayCopy
}

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function removeFirstCat(name) {
const catArrayCopy = [...cats]
catArrayCopy.shift()
return catArrayCopy
}
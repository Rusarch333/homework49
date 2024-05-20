'use strict';

/*
  Написати функцію createAdder, яка в якості параметра стартове значення для накопичення(наприклад 10) і повертає нову функцію, яка приймає в якості параметра наступне значення(наприклад 5) і повертає результат накопичення (додавати до попереднього нове значення (10+5)).
*/

const createAdder = (counter) => (additionalValue) =>
  (counter += additionalValue);

const adder = createAdder(10);
const adder2 = createAdder(100);

// adder
console.log(adder(5)); // 15
console.log(adder(3)); // 18
console.log(adder(4), "\n"); // 22

// adder 2
console.log(adder2(5)); // 105
console.log(adder2(3)); // 108
console.log(adder2(104)); // 212

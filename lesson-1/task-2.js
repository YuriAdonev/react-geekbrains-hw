'use strict';

/*
    Задание 2
*/

function calculateArea(arg1, arg2) {
  const area = arg1 * arg2;
  const figure = (arg1 == arg2) ? 'Квадрат' : 'Прямоугольник';
  const input = [arg1, arg2];
  return {
    area,
    figure,
    input
  }
}

console.log(calculateArea(10, 10));
console.log(calculateArea(10, 20));
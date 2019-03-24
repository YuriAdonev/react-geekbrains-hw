'use strict';

/*
    Задание 1
*/

function loop(times = 0, callback = null) {
  if (callback != null && times > 0) {
    for (let i = 0; i < times; i++) {
      callback();
    }
  }
}

loop(5, () => {
  console.log('test');
});

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
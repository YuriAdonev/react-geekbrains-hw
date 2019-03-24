'use strict';

/*
    Задание 1
*/

function loop(times = 0, callback = null) {
  if (callback != null) {
    for (let i = 0; i < times; i++) {
      callback();
    }
  }
}

loop(5, () => {
  console.log('test');
});
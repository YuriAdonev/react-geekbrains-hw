'use strict';

/*
    Задание 4
*/

const promisesArray = [];

for (let i = 0; i < 10; i++) {
  promisesArray[i] = new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${i+1}`).then((result) => {
      resolve(result.json());
    }).catch(() => {
      reject({});
    });
  });
}

Promise.all(promisesArray).then((result) => {
  result.forEach((item) => {
    console.log(item);
  });
});
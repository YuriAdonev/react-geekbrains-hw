'use strict';

/*
    Задание 3
*/

class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }
  displayInfo() {
    return `${this.name}, ${this.age}, ${this.dateOfBirth}`;
  }
}

class Employee extends Human {
  constructor(name, age, dateOfBirth, solary, department) {
    super(name, age, dateOfBirth);
    this.solary = solary;
    this.department = department;
  }
  displayInfo() {
    const result = super.displayInfo();
    return `${result}, ${this.solary}, ${this.department}`;
  }
}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, solary, department, manager) {
    super(name, age, dateOfBirth, solary, department);
    this.manager = manager;
  }
  changeManager(newManager) {
    this.manager.removeDeveloper(this);
    this.manager = newManager;
    newManager.addDeveloper(this.name, this.age, this.dateOfBirth, this.solary, this.department, newManager);
  }
}

class Manager extends Employee {
  constructor(name, age, dateOfBirth, solary, department) {
    super(name, age, dateOfBirth, solary, department);
    this.developers = [];
  }
  addDeveloper(name, age, dateOfBirth, solary, department) {
    const dev = new Developer(name, age, dateOfBirth, solary, department, this);
    this.developers.push(dev);
    return dev;
  }
  removeDeveloper(developer) {
    let index;
    this.developers.forEach((item, i, array) => { if (item == developer) index = i });
    this.developers.splice(index, 1);
  }
}

/*
  Тесты :)
*/

const manager = new Manager('Юрий', 38, '08.03.1981', 250000, 'web-dev');
const manager2 = new Manager('Алексей', 38, '08.03.1981', 250000, 'web-dev');
console.log(manager.displayInfo());
const dev1 = manager.addDeveloper('Петр', 28, '07.04.1991', 150000, 'web-dev');
const dev2 = manager.addDeveloper('Сергей', 26, '15.09.1993', 150000, 'web-dev');
const dev3 = manager2.addDeveloper('Максим', 32, '02.11.1987', 150000, 'web-dev');
console.log(dev1.displayInfo());
console.log(dev2.manager.name);
console.log(dev3.manager.name);
console.log(manager.developers);
manager.removeDeveloper(dev2);
console.log(manager.developers);
dev3.changeManager(manager);
console.log(dev3.manager);
console.log(manager.developers);
console.log(manager2.developers);
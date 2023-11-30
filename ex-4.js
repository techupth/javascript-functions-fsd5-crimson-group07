// Start coding here
let calculator = {
  add: {
    add(a, b) {
      return a + b;
    },
  },
  subtract: {
    subtract(a, b) {
      return a - b;
    },
  },
  multiply: {
    multiply(a, b) {
      return a * b;
    },
  },
  divide: {
    divide(a, b) {
      return a / b;
    },
  },
};
let addResult = calculator.add.add(10, 20);
console.log(addResult);
let divideResult = calculator.divide.divide(3000, 10);
console.log(divideResult);
// Start coding here
const calculator = {
    add : (a,b) => {
        return a+b ;
    },
    subtract : (a,b) => {
        return a-b;
    },
    muntiply : (a,b) => {
        return a*b;
    },
    divide : (a,b) => {
        return a/b;
    }
};

const addResult = calculator.add(10,20);
console.log(addResult)

const divideResult = calculator.divide(3000,10);
console.log(divideResult)



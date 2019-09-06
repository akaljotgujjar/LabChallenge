class Calculator {

    constructor() {}

    calculate(firstNum: number, secondNum: number) {
        return firstNum + secondNum;
    }
}

const myCalc = new Calculator();

const output = myCalc.calculate(2, 9);

console.log("The output is: " + output + ".");
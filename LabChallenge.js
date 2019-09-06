var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate = function (firstNum, secondNum) {
        return firstNum + secondNum;
    };
    return Calculator;
})();
var myCalc = new Calculator();
var output = myCalc.calculate(2, 9);
console.log("The output is: " + output + ".");

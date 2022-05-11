const calculator = {
    add: function (a, b) {
        console.log(a + b)
    },
    minus: function (a, b) {
        console.log(a - b)
    },

    multiply: function (a, b) {
        console.log(a * b)
    },

    divide: function (a, b) {
        console.log(a / b)
    },
    powerof: function (a, b) {
        console.log(a ** b)
    }
}

calculator.add(5, 3);
calculator.minus(10, 1);
calculator.multiply(2, 7);
calculator.divide(6, 2);
calculator.powerof(3, 3);

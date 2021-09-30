// codewriting

// A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

// Given two integers, your task is to find the result that the child will get.

// Note: The child had learned from this site, so feel free to check it out too if you are not familiar with column addition.

// Example

// For param1 = 456 and param2 = 1734, the output should be
// additionWithoutCarrying(param1, param2) = 1180.

//    456
//   1734
// + ____
//   1180

// The child performs the following operations from right to left:

//     6 + 4 = 10 but the child forgets about carrying the 1 and just writes down the 0 in the last column
//     5 + 3 = 8
//     4 + 7 = 11 but the child forgets about the leading 1 and just writes down 1 under 4 and 7.
//     There is no digit in the first number corresponding to the leading digit of the second one, so the child imagines that 0 is written before 456. Thus, they get 0 + 1 = 1.

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [input] integer param1

//     A non-negative integer.

//     Guaranteed constraints:
//     0 ≤ param1 < 105.

//     [input] integer param2

//     A non-negative integer.

//     Guaranteed constraints:
//     0 ≤ param2 < 6 · 104.

//     [output] integer

//     The result that the little child will get by using column addition without carrying.

// [JavaScript] Syntax Tips

// // Prints help message to the console
// // Returns a string
// function helloWorld(name) {
//     console.log("This prints to the console when you Run Tests");
//     return "Hello, " + name;
// }

function addVer(num1, num2) {
    const num1Arr = num1.toString().split('');
    const num2Arr = num2.toString().split('');
    const final = [];

    while (num1Arr.length || num2Arr.length) {
        let sum = 0;
        let n1 = num1Arr.pop();
        let n2 = num2Arr.pop();

        if (n1 === undefined) {
            n1 = 0;
        }
        if (n2 === undefined) {
            n2 = 0;
        }

        sum += eval(`${n1} + ${n2}`);
        if (sum >= 10) {
            sum -= 10;
        }

        final.push(sum);
    }
    final.reverse().join('');
    // parseInt(final);
    console.log(final);
}

addVer(456, 1730);

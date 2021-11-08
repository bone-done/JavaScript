let n = prompt("Введіть число:");
function sayPositiveOrNegativeValue (n) {
    if (n > 0) console.log("value " + n + " is positiv");
    else if (n == 0) console.log("value " + n + " is null");
    else console.log("value " + n + " is negative");
}

sayPositiveOrNegativeValue(n);
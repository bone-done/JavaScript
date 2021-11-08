function compareNum (a, b) {
    return a - b;
}

let arrNum = [1, 5, 8, -3, -10, -17, 6, 10, 55, 4, -88, -51, -1, 22, -31, 32, 33, -12, 14, 34];

console.log(arrNum.sort(compareNum));
console.log(arrNum.reverse(compareNum));
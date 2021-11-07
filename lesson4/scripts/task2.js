let arrNum = [1, 5, 8, -3, -10, -17, 6, 10, 55, 4, -88, -51, -1, 22, -31, 32, 33, -12, 14, 34];

let arrNumPos = arrNum.filter(el => el >= 0);
let arrNumNeg = arrNum.filter(el => el < 0);

console.log(arrNumPos);
console.log(arrNumNeg);
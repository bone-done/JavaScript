function filterRange (array, a, b) {
    newArray = array.slice(a, b + 1);
    console.log(newArray);
}

let digits = [1, 2, 3, 4, 5, 5];

filterRange(digits, 1, 2)
function camelize (str) {
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "-") {
            arr[i + 1] = arr[i + 1].toUpperCase(arr[i + 1]);
            arr.splice (i, 1);
        }
    }
    return str = arr.join("");
}

let string = "my-short-string";

let string2 = camelize(string);

console.log(string);
console.log(string2);






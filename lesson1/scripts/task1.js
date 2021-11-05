function summ () {
    let n = prompt("Ведіть число:");
    let sum = 0;
    let str = "";
    for (i = 0;i <= n; i++) {
        sum += i;
        str += i + " + ";
    }
    str += " = " + sum;
    console.log(str);

}
    

summ();

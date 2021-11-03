function summ () {
    let n = prompt();
    let sum = 0;
    for (i = 0;i <= n; i++) {
        sum = sum + i;
    console.log(i + "+");
    sum += i;
    }
    sum += n;
    console.log(n + "=" + sum);

}
    

summ();

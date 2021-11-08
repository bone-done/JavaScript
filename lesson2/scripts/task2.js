let employeeSalaries = {
    employee1: 7000,
    employee2: 10000,
    employee3: 12000,
    employee4: 6000,
    employee5: 11000,
    employee6: 14000,
}

let sum = 0;
for (let key in employeeSalaries) {
    sum += employeeSalaries[key]
}

console.log(sum / Object.keys(employeeSalaries).length)
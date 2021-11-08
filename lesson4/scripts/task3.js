function writeGroupNamesIntoArray (arr) {
    let groups = [];
    arr.forEach(item => groups.push(item.groupName)); 
    return groups;
}

function sumAgesInArray (arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item.age;
    }); 
    return sum;
}

function isUnderAgeStudents (arr) {
    let underAge = 18;
    let unAg = arr.filter(item => (item.age < underAge));
        if (unAg == undefined) console.log("Нема неповнолітніх");
        else console.log("Є неповнолітні!");
    return unAg;    
}

let students = [
    {age: 17, groupName: "one"},
    {age: 16, groupName: "two"},
    {age: 21, groupName: "one"},
    {age: 20, groupName: "three"},
    {age: 22, groupName: "three"},
    {age: 18, groupName: "two"},
    {age: 19, groupName: "two"},
    {age: 23, groupName: "one"},
    {age: 22, groupName: "three"},
    {age: 24, groupName: "one"},
]

console.log(writeGroupNamesIntoArray(students));
console.log(sumAgesInArray(students));
console.log(isUnderAgeStudents(students));
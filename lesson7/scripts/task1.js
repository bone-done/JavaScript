let elementsLi = document.querySelectorAll(`li`);
const button = document.querySelector(`.button`);

function writeRandomTextToLi () {
    for (let item of elementsLi) {
        item.innerHTML = "some text"
    }
}

button.addEventListener("click", writeRandomTextToLi);
console.log(elementsLi.length);


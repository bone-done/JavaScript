let elementsLi = document.querySelectorAll(`li`);
let elementsLiOuter = document.getElementsByClassName(`outer`);
const title = document.getElementById(`title`);

title.addEventListener("click", function () {
    for (let item of elementsLi) {
    item.style.visibility = "hidden";
    item.outerHTML = `<li class="outer">кафедра ІСМ</li>`
    }
});

title.addEventListener("click", function () {
    for (let item of elementsLiOuter) {
    item.style.visibility = "visible";
    }
});




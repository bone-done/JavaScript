let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-Ролл");

styles[styles.length - 2] = "Класика";

console.log(styles.shift());

styles.unshift("Реп", "Реггі");

console.log(styles);
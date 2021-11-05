let n;
function password() {
    while (n != "pass123" && n != "admin") {
        n = prompt("Ведіть пароль: (pass123 | admin)");
        if (n == "pass123") alert("Пароль вірний");
        else if (n == "admin") alert("Ви ввійшли як адміністратор");
        else alert("Невірний пароль");
    }
}

password();



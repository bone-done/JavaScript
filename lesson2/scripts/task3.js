function multi (a, b) {
    try {
        let mult = a * b;
        console.log(mult); 
    } catch(e) {
        console.log("Введено некоректні дані"); 
    }
}

multi(5, 10);
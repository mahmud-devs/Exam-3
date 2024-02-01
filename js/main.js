
let input = prompt("Input a number:");
let number = +input;


for (let i = 0; i <= 20; i++) {
    console.log(`${i} X ${number} = tomar boyos ${i * number} bosor `);
    let res = i * number;
    if (res < 20 && res >= 0) {
        console.log("Tumi biye Korte parbe na;");
    } else if (res >= 20 && res <= 45) {
        console.log("Tumi tara tari biye koro;");
    } else if (res > 45 && res <= 100) {
        console.log("Tomar biye korar somoy shes;");
    } else {
        console.log("Invalid result");
    }
}

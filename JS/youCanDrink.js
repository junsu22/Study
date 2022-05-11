const age = parseInt(prompt("How old are you?"));
if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("you are too young.");
} else if (age >= 18 && age <= 50) {
    //(true && true) = true , false&&ture = false / false&&true = false
    // || (OR) <- 한가지라도 성립하면 true
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if (age > 80) {
    console.log("you can do whetever you want.");
}
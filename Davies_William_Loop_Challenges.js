//Loop Challenges
//1. print odds from 1-20
console.log("*************************")
console.log("1. print odds from 1-20");
console.log("*************************")
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//2. Decreasing multiples of 3
console.log("*************************")
console.log("2. Decreasing multiples of 3")
console.log("*************************")
for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

//3. Print the sequence
console.log("*************************")
console.log("3. Print the sequence")
console.log("*************************")
for (var i = 4; i > -4; i -= 1.5) {
    console.log(i);
}

//4. Sigma
console.log("*************************")
console.log("4. Sigma")
console.log("*************************")
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//5. Print the sequence
console.log("*************************")
console.log("5. Factorial")
console.log("*************************")
var product = 1;
for (var i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);
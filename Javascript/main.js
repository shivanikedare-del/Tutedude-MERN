function cInterest(P, r, n, t) {

    return (P * ((1 + r / n) ** (n * t)));

}


function guessNum() {

    let a = 5;
    let b = 7;
    let c = 12;
    let d = 39;

    if (a % 2 == 0) {
        console.log("The number " + a + " is even");
    }
    else {
        console.log("The number " + a + " is odd");
    }

    if (b % 2 == 0) {
        console.log("The number " + b + " is even");
    }
    else {
        console.log("The number " + b + " is odd");
    }

    if (c % 2 == 0) {
        console.log("The number " + c + " is even");
    }
    else {
        console.log("The number " + c + " is odd");
    }

    if (d % 2 == 0) {
        console.log("The number " + d + " is even");
    }
    else {
        console.log("The number " + d + " is odd");
    }

    // a % 2 == 0 ? console.log(a + " is even") : console.log(a + " is odd");

    // b % 2 == 0 ? console.log(b + " is even") : console.log(b + " is odd");

}

export {
    cInterest, guessNum
}
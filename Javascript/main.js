function cInterest(P, r, n, t) {

    return (P * ((1 + r / n) ** (n * t)));

}


function guessNum(a, b) {

    // if (a % 2 == 0) {
    //     console.log(a + " is even");
    // }
    // else {
    //     console.log(a + " is odd");
    // }

    // if (b % 2 == 0) {
    //     console.log(b + " is even");
    // }
    // else {
    //     console.log(b + " is odd");
    // }

    a % 2 == 0 ? console.log(a + " is even") : console.log(a + " is odd");

    b % 2 == 0 ? console.log(b + " is even") : console.log(b + " is odd");

}

export {
    cInterest, guessNum
}
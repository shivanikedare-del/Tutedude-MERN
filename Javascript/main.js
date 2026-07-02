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

function sum(a) {

    let num = a.toString();
    const digits = num.length;

    console.log(`Number:- ` + a);

    if (digits > 1) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        console.log(`Sum of digits:-` + sum);
    }
    else {
        console.log(`Sum of digits:` + a);
    }


    if (digits >= 1) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]) ** 3;
        }
        if (sum === a) {
            console.log(`Is it an Armstrong number? Yes`);
        } else {
            console.log(`Is it an Armstrong number? No`);
        }
    }
    else {
        console.log(a + ` is not an Armstrong number`);
    }


    let isPrime = true;
    if (a <= 1) {
        isPrime = false;
        console.log(`Is it a prime number? Yes`);

    } else {
        for (let i = 2; i <= Math.sqrt(a); i++) {
            while (a % i === 0) {
                isPrime = false;
                console.log(`Is it a prime number? No`);
                break;
            }
        }
    }

    for (let i = 1; i <= a; i++) {
        while (a % 1 == 0) {
            console.log(`Factors: ` + i);
        }

    }
}

export {
    cInterest, guessNum, sum as calculateSum
}

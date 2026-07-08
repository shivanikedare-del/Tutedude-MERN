function task14(a) {

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

    let factors = []
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            factors.push(i);
        }

    }
    console.log(`Factors: ${factors.join(', ')}`);
}

export {
    task14 as sum
}
import { task16 } from "./task16.js";
import { task15 } from "./task15.js";
import { sum as task14 } from './task14.js';
import { task13 } from './task13.js';


function cInterest(P, r, n, t) {

    return (P * ((1 + r / n) ** (n * t)));

}

console.log(`***************TASK 13***************`);
task13();

console.log(`***************TASK 14***************`);
task14(153);

console.log(`***************TASK 15***************`);
task15()

console.log(`***************TASK 16***************`);
task16() 

export {
    cInterest
}

function task16()
{

    let arr = [4, 8, 2, 11, 6, 7, 10];

    console.log(arr.map((x) => x * 2));
    console.log(arr);

    console.log(arr.map((x) => x % 2));            // this is an operation run on all array elements

    console.log(arr.filter((x) => x % 2));         // this is a condition given to the elements

    console.log(arr.find((x) => x < 4));           // here condition will find the first element that satisfies from array 

    console.log(arr.reduce((acc, curr) => acc + curr, 0));        // this will add all the elements of the array
    
}

export {
    task16
}
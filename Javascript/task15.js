function task15() {
    let arr = [4, 8, 2, 11, 6, 7, 10];

    console.log("Ex Array:-", arr);

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Maximum number: ", max);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Sum of all elements: ${sum}`);

    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCount++;
        }
    }
    console.log(`Count of odd numbers: ${oddCount}`);

}

export {
    task15
}
function task16() {

    let arr = [4, 8, 2, 11, 6, 7, 10];

    console.log(arr.map((x) => x * 2));
    console.log(arr);

    console.log(arr.map((x) => x % 2));            // this is an operation run on all array elements

    console.log(arr.filter((x) => x % 2));         // this is a condition given to the elements

    console.log(arr.find((x) => x < 4));           // here condition will find the first element that satisfies from array 

    console.log(arr.reduce((acc, curr) => acc + curr, 0));        // this will add all the elements of the array


    let students = [
        { name: "John", Marks: 20, Class: "A", Address: "Virar, Maharashtra" },
        { name: "Jane", Marks: 22, Class: "B", Address: "Mumbai, Maharashtra" },
        { name: "Jim", Marks: 21, Class: "C", Address: "Delhi, Delhi" },
        { name: "Jack", Marks: 23, Class: "D", Address: "Bangalore, Karnataka" },
        { name: "Jill", Marks: 24, Class: "E", Address: "Chennai, Tamil Nadu" },
        { name: "Jerry", Marks: 25, Class: "A", Address: "Kolkata, West Bengal" },
        { name: "Jasmine", Marks: 26, Class: "A", Address: "Hyderabad, Telangana" },
        { name: "Jordan", Marks: 27, Class: "A", Address: "Ahmedabad, Gujarat" },
        { name: "Javier", Marks: 28, Class: "C", Address: "Jaipur, Rajasthan" },
        { name: "Jocelyn", Marks: 29, Class: "C", Address: "Lucknow, Uttar Pradesh" },
        { name: "Sam", Marks: 30, Class: "E", Address: "Nagpur, Maharashtra" },
        { name: "Samantha", Marks: 31, Class: "B", Address: "Indore, Madhya Pradesh" },
        { name: "Sanjay", Marks: 32, Class: "B", Address: "Bhopal, Madhya Pradesh" },
        { name: "Sonia", Marks: 33, Class: "D", Address: "Patna, Bihar" },
        { name: "Suresh", Marks: 34, Class: "A", Address: "Raipur, Chhattisgarh" },
        { name: "Sneha", Marks: 35, Class: "C", Address: "Visakhapatnam, Andhra Pradesh" },
        { name: "Siddharth", Marks: 36, Class: "B", Address: "Vadodara, Gujarat" },
        { name: "Sakshi", Marks: 37, Class: "C", Address: "Vijayawada, Andhra Pradesh" },
        { name: "Sahil", Marks: 38, Class: "C", Address: "Guwahati, Assam" },
    ];

    let studentCards = students.map((student) => `
        <div class="student-card">
            <p>Student name: ${student.name}</p>
            <p>Marks: ${student.Marks}</p>
            <p>Class: ${student.Class}</p>
            <p>Address: ${student.Address}</p>
        </div>
    `).join('');

    document.getElementById("students").innerHTML = studentCards;
}


export {
    task16
}
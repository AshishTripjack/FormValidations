// // GET METHOD

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); // Parse the JSON from the response
//     })
//     .then(data => {
//         console.log(data); // Handle the data 
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });


// // POST METHOD

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Specify the content type
    },
    body: JSON.stringify({
        name: 'John Doe',
        age: 30
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data); // Handle success response
    })
    .catch(error => {
        console.error('Error:', error);
    });


//     //PUT METHOD

//     fetch('https://jsonplaceholder.typicode.com/users/1', { // Assuming you're updating data with ID 1
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             name: 'Jane Doe',
//             age: 28
//         })
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Updated:', data); // Handle updated data
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });

        
//         //DELETE METHOD

//         fetch('https://jsonplaceholder.typicode.com/users/1', { // Assuming you're deleting data with ID 1
//             method: 'DELETE',
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Deleted:', data); // Handle successful deletion
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });

const course={
    courseName:"JS",
    price:'9999',
    courseInstructor:"Nitin"
}

console.log(course.courseInstructor);

const {courseInstructor:Instructor}=course;
console.log(Instructor);

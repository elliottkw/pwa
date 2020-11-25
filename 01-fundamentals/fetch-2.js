// GET Request
// https://reqres.in/api/users

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(responseJSON => {
        console.log(responseJSON);
        console.log(responseJSON.page);
        console.log(responseJSON.per_page);
    });
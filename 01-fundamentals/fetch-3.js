// POST Request
// https://reqres.in/api/users

let user = {
    name: 'Elliott',
    age: 39
};

fetch('https://reqres.in/api', {
        method: 'POST', // PUT
        body: JSON.stringify(user), //data
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);
    });
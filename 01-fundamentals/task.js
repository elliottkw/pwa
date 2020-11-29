// Exercise #1
fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(people => {
        console.log(people.name);
        console.log(people.gender);
    })
    .catch(error => {
        console.log('Error');
        console.log(error);
    });

// Exercise #2
function postData(people) {
    let data = {
        name: people.name,
        gender: people.gender
    };

    return fetch('https://reqres.in/api/users/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(postData)
    .then(response => response.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición');
        console.log(error);
    });
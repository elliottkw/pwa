fetch('https://reqres.in/api/users/1')
    .then(response => {
        response.clone().json().then(user => {
            console.log(user.data);
        })

        response.clone().json().then(user => {
            console.log(user.data);
        })

        response.json().then(user => {
            console.log(user.data);
        })
    });
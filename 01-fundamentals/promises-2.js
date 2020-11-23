function addOne(number) {
    var promise = new Promise(function(resolve, reject) {
        console.log(number);

        if (number >= 7) {
            reject('Es un número muy alto');
        }

        setTimeout(function() {
            resolve(number + 1);
        }, 800);
    });

    return promise;
}

addOne(5)
    .then(addOne)
    .then(addOne)
    .then(addOne)
    .then(addOne)
    .then(newNumber => {
        console.log(newNumber);
    })
    .catch(error => {
        console.log('ERROR EN PROMESA');
        console.log(error);
    });
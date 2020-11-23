function addOne(number) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(number + 1);
        }, 800);
    });

    return promise;
}

addOne(5).then(newNumber => {
        console.log(newNumber);
        return addOne(newNumber);
    })
    .then(newNumber => {
        console.log(newNumber);
        return addOne(newNumber);
    })
    .then(newNumber => {
        console.log(newNumber);
    });
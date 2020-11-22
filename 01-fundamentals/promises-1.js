function addOne(number, callback) {
    if (number >= 7) {
        callback('Número muy alto');
        return;
    }

    setTimeout(function() {
        //return number + 1;
        callback(null, number + 1);
    }, 800);

}

addOne(5, function(error, newValue) {
    if (error) {
        console.log(error);
        return;
    }

    addOne(newValue, function(error, newValue2) {
        if (error) {
            console.log(error);
            return;
        }

        addOne(newValue2, function(error, newValue3) {
            if (error) {
                console.log(error);
                return;
            }

            console.log(newValue3);
        })
    })
});
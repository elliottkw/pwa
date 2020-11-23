function returnTrue() {
    return true;
}

function addSlow(number) {
    return new Promise(function(resolv, reject) {
        setTimeout(function() {
            resolv(number + 1);
            //reject('addSlow failed');
        }, 800);
    });
}

let addFast = (number) => {
    return new Promise((resolv, reject) => {
        setTimeout(() => resolv(number + 1), 300);
    });
}

let things = [addSlow(5), addFast(10), true, 'Hello world', returnTrue()];

Promise.all(things)
    .then(response => {
        console.log(response);
    })
    .catch(console.log);

//addSlow(5).then(console.log);
//addFast(10).then(console.log);
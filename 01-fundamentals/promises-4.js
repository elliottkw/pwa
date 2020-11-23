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
        setTimeout(() => {
            //resolv(number + 1)
            reject('Error in addFast')
        }, 1000);
    });
}

Promise.race([addSlow(5), addFast(10)])
    .then(response => {
        console.log(response);
    });
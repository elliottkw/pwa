var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function(state) {
    if (request.readyState === 4) {
        var response = request.response;
        var responseJSON = JSON.parse(response);

        console.log(responseJSON);
    }
};
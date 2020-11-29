self.addEventListener('fetch', event => {
    if (event.request.url.includes('.jpg')) {
        console.log(event.request.url);

        // let photoRequest = fetch('img/main.jpg');
        // let photoRequest = fetch(event.request.url');
        let photoRequest = fetch(event.request);

        event.respondWith(photoRequest);
    }
});
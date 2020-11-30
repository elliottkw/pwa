self.addEventListener('fetch', event => {
    if (event.request.url.includes('main.jpg')) {
        let response = fetch('img/main-patas-arriba.jpg');

        event.respondWith(response);
    }
});
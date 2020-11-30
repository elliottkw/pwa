self.addEventListener('fetch', event => {
    const response = fetch(event.request)
        .then(response => response.ok ? response : fetch('img/main.jpg'));

    event.respondWith(response);
});
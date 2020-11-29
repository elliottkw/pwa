//if ('serviceWorker' in navigator) {
//    console.log('We can use...');
//}

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}
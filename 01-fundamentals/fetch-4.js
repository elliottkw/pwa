let img = document.querySelector('img');

fetch('superman.png')
    .then(response => response.blob())
    .then(image => {
        //console.log(image);
        var imagePath = URL.createObjectURL(image);
        img.src = imagePath;
    });
// Hide images on hover in a browser
function hide_images_on_hover() {
    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (image.addEventListener) {
            image.addEventListener('mouseover', hide, false);
        } else {
            image.attachEvent('mouseenter', hide);
        }
    }

    function hide(event) {
        event.target.style.visibility = 'hidden';
        event.target.style.display = 'none';
        console.log('Image hidden.');
    }
}


hide_images_on_hover();

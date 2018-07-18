var imageIndex = 1;
ShowSlides(imageIndex)

function currentSlide(n) {
    clearTimeout(timer);
    ShowSlides(imageIndex = n)
}

function ShowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Product_Slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[imageIndex - 1].style.display = "block";
    console.log(slides.length);
}

var imageIndex = 1;
var timer = null;

function plusSlides(n)
{
   clearTimeout(timer);
   ShowSlides(imageIndex +=n)
}

function currentSlide(n)
{
    clearTimeout(timer);
    ShowSlides(imageIndex = n)
}

function ShowSlides(n)
{
    console.log(imageIndex);
    var i;
    var slides = document.getElementsByClassName("Gallery_Images");
    var dots = document.getElementsByClassName("dot");
    console.log(slides);

    if (n == undefined) { n = ++imageIndex }

    if(n>slides.length)
    {
        imageIndex = 1;
    }

    if(n<1)
    {
        imageIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
   
    slides[imageIndex-1].style.display = "block";
    dots[imageIndex - 1].className += " active";
    timer=setTimeout(ShowSlides, 5000)
}
function myFunction(imgs) {
    var expandImg = document.getElementById("Product_Slide");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}
// Slideshow on Home Page
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
// End of SlideShow on Home Page

// Navbar Hamburger
function myFunction() {
  console.log("CLICK");
  var x = document.getElementById("myLinks");
  if (x.className === "myLinks") {
    x.className += " responsive";
  } else {
    x.className = "myLinks";
  }
}
// End of Navbar Hamburger
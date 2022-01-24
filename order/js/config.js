// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlide() {
//   showSlides(slideIndex += 1);
// }

// function minusSlide() {
//   showSlides(slideIndex -= 1);  
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("parag");
//   var dots = document.getElementsByClassName("noguma-pomoki-kadra");
//   if (n > slides.length) {
//   slideIndex = 1
//   }
//   if (n < 1) {
//   slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace("deystvuyus", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " deystvuyus";
// }

// Accordion
var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for(i=0;i<details.length;i++) {
      if (details[i].tagName != "DETAILS" || 
         !details[i].hasAttribute('open') || 
         event.target == details[i]) {
         continue;
      }
      details[i].removeAttribute("open");
    }
}
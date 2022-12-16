let slideIndex2 = 0;
showSlides2();
function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}
function showSlides2() {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active2";
  setTimeout(showSlides2, 1500);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("slide_dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].className += " active";
}

// Auto-advance slides
setInterval(() => {
    plusSlides(1);
}, 7500);

//core competencies
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  $(".flowfromright").css({
    //width: (50 + scroll / 25) + "%"
    left: scroll / 100 + "%",
  });
  $(".flowfromleft").css({
    //width: (50 + scroll / 5) + "%",
    right: scroll / 100 - 40 + "%",
  });
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//Get the button:

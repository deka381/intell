document.addEventListener("DOMContentLoaded", function(){

// slider Pakiety pobytowe START
let responsiveSlider = function() {
  let slider = document.querySelector(".carusel");
  let sliderWidth = slider.offsetWidth;
  console.log(sliderWidth);
  let sliderList = document.querySelector(".slide_img_section2");
  let count =1;
  let items = sliderList.querySelectorAll(".slide_section2").length;
  let prev = document.querySelector(".slider-section2-prev");
  let next = document.querySelector(".slider-section2-next");

  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function() {
    if(count < items) {
      sliderList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      sliderList.style.left = "0px";
      count = 1;
    }
  };

next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });


 setInterval(function() {
    nextSlide()
  }, 5000);



};
window.onload = function() {
  responsiveSlider();  
}
// slider Pakiety pobytowe END



});
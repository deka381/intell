document.addEventListener("DOMContentLoaded", function(){

// slider Pakiety pobytowe START
let section2Slider = function() {
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
  section2Slider();  
}
// slider Pakiety pobytowe END

// slider Galery START
let GalerySlider = function(x,pause,play) {
  let sliderGalery = document.querySelector(".slide_section"+x);
  let sliderWidthGalery = sliderGalery.offsetWidth;
  let sliderListGalery = document.querySelector(".ul_section"+x);
  let countGalery =1;
  let itemsGalery = sliderListGalery.querySelectorAll(".img_slide_section"+x).length;
  let prevGalery = document.querySelector(".slider"+x+"-prev");
  let nextGalery = document.querySelector(".slider"+x+"-next");
  let pauseGalery = document.querySelector(".slider"+x+"-pause");

  window.addEventListener('resize', function() {
    sliderWidthGalery = sliderGalery.offsetWidth;
  });

  var prevSlideGalery = function() {
    if(countGalery > 1) {
      countGalery = countGalery - 2;
      sliderListGalery.style.left = "-" + countGalery * sliderWidthGalery + "px";
      countGalery++;
    }
    else if(countGalery = 1) {
      countGalery = itemsGalery - 1;
      sliderListGalery.style.left = "-" + countGalery * sliderWidthGalery + "px";
      countGalery++;
    }
  };

  var nextSlideGalery = function() {
    if(countGalery < itemsGalery) {
      sliderListGalery.style.left = "-" + countGalery * sliderWidthGalery + "px";
      countGalery++;
    }
    else if(countGalery = itemsGalery) {
      sliderListGalery.style.left = "0px";
      countGalery = 1;
    }
  };

nextGalery.addEventListener("click", function() {
    nextSlideGalery();
  });

  prevGalery.addEventListener("click", function() {
    prevSlideGalery();
  });

    let click = 2;
    var startStop;
    

  pauseGalery.addEventListener("click", function(){
    if (click === 2) {
      nextSlideGalery();
    }
    if (click%2===0){
      startStop= setInterval(function() {
      nextSlideGalery()
      }, 5000);
      pauseGalery.style.backgroundImage = "url('img/svg/"+pause+"')";
    }else{
      clearInterval(startStop);
      pauseGalery.style.backgroundImage = "url('img/svg/"+play+"')";
      }

      click++;
    
  });
      

};
window.onload = function() {
  GalerySlider(4,"pause.png","play.svg");  
  GalerySlider(6,"pauseWhite.png","playWhite.png"); 
}
// slider Galery END

});
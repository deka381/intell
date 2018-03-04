// document.addEventListener("DOMContentLoaded", function(){
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

// window.onload = function() {
//   section2Slider();  
// }
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
  section2Slider();  
}
// slider Galery END






// burder

let burger = document.querySelector(".hamburger");
let menuMobile= document.querySelector(".mobile_menu");
let close= document.querySelector(".close");
console.log(burger);
  let open= 1;
burger.addEventListener("click", function(){
      setTimeout(function(){ 
      menuMobile.style.transform = "translateX(0)";
      close.classList.add("closeAnimation");
      close.classList.remove("closeAnimationOut");
      burger.style.display="none";
        }, 100);
        menuMobile.classList.remove("hide");
});
close.addEventListener("click", function(){
      menuMobile.style.transform = "translateX(100%)";
      close.classList.remove("closeAnimation");
      close.classList.add("closeAnimationOut");
      burger.style.display="block";
      setTimeout(function(){ 
        menuMobile.classList.add("hide");
        }, 1000);
  });


//

//ajax
const apiUrl="http://localhost:3000/users";
const send = document.querySelector(".button");
const inputMail = document.querySelector(".input-mail");
const checkBox = document.querySelector(".checkboxClick");
const errorSent = document.querySelector(".errorSent");
const mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');

send.addEventListener("click", function(e){
  e.preventDefault();
  let inputMailValue = inputMail.value;

    if(checkBox.checked && inputMailValue!=="" && mailReg.test(inputMailValue)) {
      errorSent.classList.add('goodSentMsg');
      errorSent.innerText="Wiadomość wysłana!";
      inputMail.value="";
      alert("Twój email został zapisany do newslettera !");
      checkBox.checked=false;  
        let newUser ={
          email:inputMailValue,
        }
        $.ajax({
            type:"POST",
            url:apiUrl,
            data:newUser,
            dataType:"json"
          }).done(function (response) {
              console.log(response);
          }).fail(function (error) {
              console.log("error form POST");
        });
      
    } else{
      errorSent.classList.add('errorSentMsg');
      errorSent.innerText="Błędny email bądź regulami nie został zaakceptowany!";
      console.log("nie ma");
    }
})

  
// BACK TO TOP START
$(".goTop").click(function (){
   $('html, body').animate({
     scrollTop: $('#header').offset().top
}, 1000, 'linear');
});
 
//BACK TO TOP END

// go to section

$(".li-pakiety").click(function (){
   $('html, body').animate({
     scrollTop: $('#section2').offset().top
}, 500, 'linear');
});

$(".li-spa").click(function (){
   $('html, body').animate({
     scrollTop: $('#section4').offset().top
}, 500, 'linear');
});

$(".li-konferencja").click(function (){
   $('html, body').animate({
     scrollTop: $('#section6').offset().top
}, 500, 'linear');
});

$(".li-pokoje").click(function (){
   $('html, body').animate({
     scrollTop: $('#section5').offset().top
}, 500, 'linear');
});

$(".li-kontakt").click(function (){
   $('html, body').animate({
     scrollTop: $('#section8').offset().top
}, 500, 'linear');
});

const myBtnGoTop= document.querySelector(".myBtnGoTop");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 600 && document.body.scrollTop <3300 ) {
        myBtnGoTop.style.display = "flex";
    } else {
        myBtnGoTop.style.display = "none";
    }
}

$(".myBtnGoTop").click(function (){
   $('html, body').animate({
     scrollTop: $('#section1').offset().top
}, 500, 'linear');
});
//



const liRestauracja = document.querySelector(".li-restauracja");
const liRestauracjaUL = liRestauracja.querySelector('ul');
const liWesele = document.querySelector(".li-wesele");
const liWeseleUL = liWesele.querySelector('ul');

liRestauracja.addEventListener("click", function(){
    liRestauracjaUL.classList.toggle("hide");    
    
});
liWesele.addEventListener("click", function(){
    liWeseleUL.classList.toggle("hide");    
    
});


});
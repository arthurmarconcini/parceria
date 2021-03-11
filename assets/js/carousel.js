let slider = new Glider(document.querySelector('.slides'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',  
  scrollLock: true,
  rewind: true, 
});

function sliderAuto(slider, miliseconds) {
 slider.isLastSlide = function() {
   return slider.page >= slider.dots.childElementCount - 1;
 }

 var slide = function() {
   slider.slideTimeout = setTimeout(function() {
     function slideTo() {
       return slider.isLastSlide() ? 0 : slider.page + 1;
     }

     slider.scrollItem(slideTo(), true);
   }, miliseconds);
 }

 slider.ele.addEventListener('glider-animated', function(event) {
   window.clearInterval(slider.slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(slider, 5000);



let slider = document.querySelector('.slides');

new Glider(slider, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  scrollLock: true,
  rewind: true,  
});

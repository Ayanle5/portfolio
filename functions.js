window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    document.getElementById('background').style.transform = `translateY(${offset * 0.2}px)`;
  });
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
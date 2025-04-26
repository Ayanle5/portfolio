window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    document.getElementById('background').style.transform = `translateY(${offset * 0.2}px)`;
  });
  
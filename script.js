function loaderAnimation() {


  let tl = gsap.timeline()
  tl.from('.line h1', {
    y: 150,
    stagger: 0.3,
    delay: 0.4,
    duration: 0.7
  })
  tl.from('.timer, .line h2', {
    opacity: 0,
    onStart: function () {
      let timer = document.querySelector('.timer h5');
      let count = '';
      setInterval(function () {
        if (count <= 100) {
          timer.textContent = count;
          count++;
        } else { }
      }, 37);
    }
  })

  tl.to('.loader', {
    opacity: 0,
    duration: 0.5,
    delay: 3
  })

  tl.from('.page-1', {
    y: 1600,
    ease: Power4,
    delay: 0.3,
    opacity: 0,
    duration: 0.4
  })

  tl.to('.loader', {
    display: 'none'
  })



}

loaderAnimation();
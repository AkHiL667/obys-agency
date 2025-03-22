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
      }, 28);
    }
  })

  tl.to('.loader', {
    opacity: 0,
    duration: 0.5,
    delay: 2.7
  })

  tl.from('.page-1', {
    y: 1600,
    ease: Power4,
    delay: 0.0,
    opacity: 0,
    duration: 0.4
  })

  tl.to('.loader', {
    display: 'none'
  })
  tl.from('.nav-1', {
    opacity: 0
  })

  tl.from('.hero h1, #hero3 h2 ,#hero3 h3', {
    y: 140,
    stagger: 0.2,
    duration: 0.5
  })


}
function customCursor() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to('.cursor', {
      x: dets.x,
      y: dets.y
    })
  })
}
function magnetelem() {
  Shery.makeMagnet(".nav-2 h6" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}


magnetelem();
customCursor();
loaderAnimation();



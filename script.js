
function locomotivescroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
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
    delay: 0
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

locomotivescroll();
magnetelem();
customCursor();
loaderAnimation();



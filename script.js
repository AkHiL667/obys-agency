
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
  // document.addEventListener("mousemove", function (dets) {
  //   gsap.to('.cursor', {
  //     x: dets.x,
  //     y: dets.y
  //   })
  //   let videoContainer = document.querySelector('.video1');
  //   videoContainer.addEventListener('mouseenter', () => {
  //     videoContainer.addEventListener('mousemove', (dets) => {
  //       gsap.to('.video-cursor', {
  //         x: dets.x - 1300,
  //         y: dets.y - 190
  //       })
  //     })
  //   })


  // })
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet('.nav-2 h6');

  let videoContainer = document.querySelector('.video1');
  let video = document.querySelector('.video1 video');

  let flag = 0;
  video.addEventListener('click', () => {
    if (flag == 0) {

      video.play()
      video.style.opacity = 1
      document.querySelector('.video-cursor').innerHTML = '<i class="ri-pause-large-fill"></i>';
      gsap.to('.video-cursor', {
        scale: 0.5,
      })
      flag = 1

    } else {

      video.pause()
      video.style.opacity = 0
      document.querySelector('.video-cursor').innerHTML = '<i class="ri-play-large-fill"></i>';
      gsap.to('.video-cursor', {
        scale: 1,
      })
      flag = 0;
    }
  })

  videoContainer.addEventListener('mouseenter', () => {
    gsap.to('.mousefollower', {
      opacity: 0,
    });
    videoContainer.addEventListener('mousemove', (dets) => {
      gsap.to('.video-cursor', {
        x: dets.x - 1300,
        y: dets.y - 190
      });
    });
  });
  videoContainer.addEventListener('mouseleave', () => {
    gsap.to('.mousefollower', {
      opacity: 1,
    });
    videoContainer.addEventListener('mouseleave', () => {
      gsap.to('.video-cursor', {
        x: '70%',
        y: '-15%',
      });
    });
  });
};

function sheryAnimation() {
  Shery.imageEffect('.image-div', {
    style: 5,
    config: { "a": { "value": 1.15, "range": [0, 30] }, "b": { "value": -0.94, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272749932567818 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.24, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.46, "range": [0, 10] }, "metaball": { "value": 0.46, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 7.63, "range": [0, 100] } },
    gooey: true,
  });

}

// function magnetelem() {
//   Shery.makeMagnet(".nav-2 h6" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });
// }

// magnetelem();
loaderAnimation();
customCursor();
locomotivescroll();
sheryAnimation();




document.addEventListener('mousemove', (dets) => {
  gsap.to('.flag-india', {
    x: dets.x,
    y: dets.y
  })
})

document.querySelector('#hero3').addEventListener('mouseenter', () => {
  gsap.to('.flag-india', {
    opacity: 1
  })
})
document.querySelector('#hero3').addEventListener('mouseleave', () => {
  gsap.to('.flag-india', {
    opacity: 0
  })
})


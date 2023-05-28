gsap.registerPlugin(ScrollTrigger);

const childElement1 = document.querySelector('.hero-showcase');
const childElement2 = document.querySelector('.hero-1-marquee-horizontal');

gsap.to(".hero-showcase", {
  y: -500,
  scrollTrigger: {
    trigger: '.hero-1',
    scrub: true,
    start: 'top top',
    end: 'bottom top',
  },
});
gsap.to(".hero-2", {
  y: -400,
  scrollTrigger: {
    trigger: '.hero-1',
    scrub: true,
    start: 'top top',
    end: 'bottom top',
  },
});
gsap.to(childElement2, {
  y: 40,
  opacity: 0,
  scrollTrigger: {
    trigger: '.hero-1',
    scrub: true,
    start: 'top top',
    end: 'bottom 60%',
  },
});



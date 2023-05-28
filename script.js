gsap.registerPlugin(ScrollTrigger);

gsap.to(".empty-mock, .hero-mock-1", {
  y:0,
  rotation: 0,
  duration: 1,
});

gsap.to(".empty-mock, .hero-mock-1", {
  x:0,
  rotation: 0,
  duration: 4,
});

// 150.72 82.4 40 margin

gsap.to(".hero-1-marquee-horizontal", {
  opacity: 0,
  y: 40,
  scrollTrigger: {
    trigger: ".hero-1",
    scrub: true,
    start: "top top",
    end: "bottom 60%",
  },
});
gsap.to(".container-hero-1", {
  y: -200,
  scrollTrigger: {
    trigger: ".hero-1",
    scrub: true,
    start: "top top",
    end: "bottom top",
  },
});
// gsap.to(".hero-mock-center", {
//   y: -350,
//   scrollTrigger: {
//     trigger: ".hero-1",
//     scrub: true,
//     start: "top top",
//     end: "bottom top",
//   },
// });
// gsap.to(".hero-mock-1", {
//   y: -290,
//   scrollTrigger: {
//     trigger: ".hero-1",
//     scrub: true,
//     start: "top top",
//     end: "bottom top",
//   },
// });
// gsap.to(".empty-mock", {
//   y: -250,
//   scrollTrigger: {
//     trigger: ".hero-1",
//     scrub: true,
//     start: "top top",
//     end: "bottom top",
//   },
// });

gsap.fromTo(
  ".sel-country-card-1",
  {
    y: 0,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: ".hero-1",
      scrub: true,
      start: "top top",
      end: "bottom top",
    },
  }
);

gsap.fromTo(
  ".sel-country-card-2",
  {
    y: 400,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: ".hero-1",
      scrub: true,
      start: "top top",
      end: "bottom top",
    },
  }
);

gsap.to(".hero-2", {
  opacity: 0,
  y: -230,
  scrollTrigger: {
    trigger: ".hero-3",
    scrub: true,
    start: "top bottom",
    end: "bottom bottom",
  },
});

gsap.fromTo(
  ".hero-3",
  {
    y: 100,
  },
  {
    y: -100,
    scrollTrigger: {
      trigger: ".hero-2",
      scrub: true,
      start: "top bottom",
      end: "bottom bottom",
    },
  }
);

gsap.fromTo(
  ".hero-3 >:nth-child(1)",
  {
    y: 100,
  },
  {
    y: -20,
    scrollTrigger: {
      trigger: ".hero-2",
      scrub: true,
      start: "top bottom",
      end: "bottom bottom",
    },
  }
);

gsap.fromTo(
  ".hero-3 >:nth-child(2)",
  {
    y: 50,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: ".hero-3",
      scrub: true,
      start: "top bottom",
      end: "bottom bottom",
    },
  }
);

gsap.fromTo(
  ".hero-3 >:nth-child(3)",
  {
    y: 100,
  },
  {
    y: 0,
    scrollTrigger: {
      trigger: ".hero-3",
      scrub: true,
      start: "top bottom",
      end: "bottom bottom",
    },
  }
);

gsap.fromTo(
  ".section-4-cards-container",
  { y: 0 }, // Initial y position
  {
    y: "-500vh",
    scrollTrigger: {
      trigger: ".section-4",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=400%",
    },
  }
);
gsap.from(".section-4", {
  height: "100vh", // Initial y position
  scrollTrigger: {
    trigger: ".section-5",
    scrub: true,
    start: "top top",
    end: "+=400%",
  },
});

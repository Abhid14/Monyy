// unlock scroll here

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  force3D: true, // Force hardware acceleration using 3D transforms
});

let mm = gsap.matchMedia(),
  breakPoint = 480;

mm.add(
  {
    // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
    isDesktop: `(min-width: ${breakPoint}px)`,
    isMobile: `(max-width: ${breakPoint - 1}px)`,
  },
  (context) => {
    let { isDesktop, isMobile } = context.conditions;
    const t1 = gsap.timeline();
    window.onload = function () {
      const howItWorksDiv = document.querySelector('#how-it-works');
      howItWorksDiv.setAttribute('style', 'height: 400vh');
      startShow();
    };
    function startShow() {
      t1.to(".lottie-splash", {
        autoAlpha: 0, // Fade out the element and set its visibility to "hidden"
        duration: 2,
      })
        .fromTo(
          ".heading-1",
          {
            opacity: 0,
            y: 320,
          },
          {
            opacity: 1,
            y: 0,
            delay: 1 / 2,
            duration: 1,
          }
        )
        .fromTo(
          ".hero-showcase",
          {
            opacity: 0,
            y: 450,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".hero-1-marquee-horizontal",
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".h-m-1",
          {
            x: -30,
            y: 382,
            rotate: "-30deg",
          },
          {
            x: 0,
            y: 0,
            rotate: "0deg",
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".h-m-2",
          {
            x: 30,
            y: 382,
            rotate: "30deg",
          },
          {
            x: 0,
            y: 0,
            rotate: "0deg",
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".e-m-1",
          {
            x: -70,
            y: 450,
            rotate: "-60deg",
          },
          {
            x: 0,
            y: 0,
            rotate: "0deg",
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".e-m-2",
          {
            x: 70,
            y: 450,
            rotate: "60deg",
          },
          {
            x: 0,
            y: 0,
            rotate: "0deg",
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".hero-cta-desktop",
          {
            opacity: 0,
            y: 200,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".accent-box",
          {
            x: 0,
          },
          {
            x: "50vw",
            duration: 3 / 2,
          },
          "<"
        )
        .fromTo(
          ".navbar-no-shadow",
          {
            opacity: 0,
            y: -100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".accent-box",
          {
            width: "36px",
            x: "50vw",
          },
          {
            width: "50vw",
            x: 0,
            duration: 1 / 2,
            onComplete: function () {
              startScrollerFunc();
              startLoopCta();
            },
          }
        );
    }

    function startLoopCta() {
      const loopTimeline = gsap.timeline({ repeat: -1 });
      loopTimeline
        .fromTo(
          ".accent-box",
          {
            x: 0,
          },
          {
            x: "50vw",
            duration: 3 / 2,
          }
        )
        .fromTo(
          ".accent-box",
          {
            width: "36px",
            x: "50vw",
          },
          {
            width: "50vw",
            x: 0,
            left: "calc(50%)",
            duration: 1,
          }
        );
    }

    function startScrollerFunc() {
      t1.kill(); // Destroy the timeline
      enableScroll();
      gsap.fromTo(
        ".hero-showcase",
        { y: 0 }, // Initial position
        {
          y: -40, // Jump up distance
          yoyo: true, // Play the animation in reverse
          repeat: 3, // Repeat indefinitely
          duration: 1 / 4, // Animation duration
          ease: "power1.out", // Easing function
        }
      );
      if (isDesktop) {
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
      } else {
        gsap.to(".download-btn", {
          width: 270,
          scrollTrigger: {
            trigger: ".hero-2",
            scrub: true,
            start: "top bottom",
            end: "top center",
          },
        });
        gsap.to(".mq-cont", {
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero-2",
            scrub: true,
            start: "top bottom",
            end: "top bottom-=100px",
          },
        });
        gsap.to(".hero-1-marquee-horizontal, .download-cta-mob", {
          backgroundColor: "transparent",
          scrollTrigger: {
            trigger: ".hero-2",
            scrub: true,
            start: "top bottom",
            end: "top bottom-=100px",
          },
        });
      }

      gsap.to(".container-hero-1", {
        y: -200,
        scrollTrigger: {
          trigger: ".hero-1",
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
      });
      gsap.to(".hero-mock-center", {
        y: -350,
        scrollTrigger: {
          trigger: ".hero-1",
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
      });
      gsap.to(".hero-mock-1", {
        y: -290,
        scrollTrigger: {
          trigger: ".hero-1",
          scrub: true,

          start: "top top",
          end: "bottom top",
        },
      });
      gsap.to(".empty-mock", {
        y: -250,
        scrollTrigger: {
          trigger: ".hero-1",
          scrub: true,

          start: "top top",
          end: "bottom top",
        },
      });

      gsap.fromTo(
        ".sel-country-card-1",
        {
          y: 0,
        },
        {
          y: isDesktop ? 0 : -150,
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
          y: isDesktop ? 400 : 0,
        },
        {
          y: isDesktop ? 0 : -120,
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
          y: isDesktop ? 50 : 0,
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
          y: isDesktop ? 100 : 0,
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
          y: "-300vh",
          scrollTrigger: {
            trigger: ".section-4",
            scrub: true,
            pin: true,
            pinSpacing: false,

            start: "top top",
            end: "+=300%",
          },
        }
      );


      if (isDesktop) {

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const isVisible = entry.isIntersecting;
              const target = entry.target;

              const cardIndex = target.dataset.cardIndex; // Get the data-card-index attribute value

              const howImg = document.querySelector(`.how-img-${cardIndex}`); // Get the corresponding .how-img element

              if (isVisible) {
                gsap.to(target, { opacity: 1 }); // Change opacity of the card container to 1 when visible
                gsap.to(howImg, { opacity: 1 }); // Change opacity of the corresponding .how-img element to 1 when visible
              } else {
                gsap.to(target, { opacity: 0 }); // Change opacity of the card container to 0 when not visible
                gsap.to(howImg, { opacity: 0 }); // Change opacity of the corresponding .how-img element to 0 when not visible
              }
            });
          },

          { rootMargin: "-200px" } // Set the rootMargin to adjust the intersection threshold
        );

        // Get all the card containers and observe them
        const cardContainers = document.querySelectorAll(".section-4-feat-cards");
        cardContainers.forEach((container) => {
          observer.observe(container);
        });

        gsap.from(".section-4", {
          height: "100vh", // Initial y position
          scrollTrigger: {
            trigger: ".section-5",
            scrub: true,
            start: "top top",
            end: "+=400%",
          },
        });
      }
    }
    return () => {

    };
  }
);

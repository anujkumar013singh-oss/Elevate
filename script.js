// === Image Slider ===
const slides = document.querySelectorAll('.slider img');
let index = 0;

function showNextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
setInterval(showNextSlide, 1500);

// === GSAP Headline Animation ===
const mainHeadline = document.querySelector(".main-headline");
const tagline = document.querySelector(".tagline");

const splitHeadline = new SplitType(mainHeadline, { types: "chars" });
const splitTagline = new SplitType(tagline, { types: "words" });

const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "expo.out" } });

tl.from(splitHeadline.chars, {
  y: 100,
  rotationX: 90,
  opacity: 0,
  color: "#fff",
  stagger: 0.03,
  transformOrigin: "center top",
  perspective: 700,
}).to(
  splitHeadline.chars,
  {
    color: "#ffffffff",
    duration: 1.2,
    stagger: 0.03,
    ease: "power2.out",
  },
  "-=0.9"
);

tl.from(
  splitTagline.words,
  {
    y: 60,
    opacity: 0,
    filter: "blur(16px)",
    stagger: 0.12,
    duration: 0.7,
    ease: "power3.out",
  },
  "-=1.2"
);

// === Scroll-Triggered Fade Text Animation ===
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".fade-text").forEach((element) => {
  const text = new SplitType(element, { types: "chars" });
  const scrollConfig = {
    trigger: element,
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    toggleActions: "play play reverse reverse",
  };

  gsap.fromTo(
    text.chars,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: scrollConfig,
    }
  );

  gsap.fromTo(
    element.querySelectorAll("span .char"),
    { color: "#000000" },
    {
      color: "#ffffffff",
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: scrollConfig,
    }
  );
});


  gsap.from(".logo h1",{
    x:-800,
    opacity:0,
    duration:1.0,  
    delay:0.1
  })

    tl.from(".nav-items",{
    y:-800,
    opacity:0,
    duration:1.0,  
    delay:0.1
  })

  
gsap.from("h3",{
    x:-300,
    opacity:0,
    duration:0.2,
    scrollTrigger:{
        trigger:"h3",
        scroller:"body",
        start:"top 50%",
    }
})


gsap.from(".container",{
    x:-1200,
    y:-20,
    opacity:0,
    duration:0.2,
    scrollTrigger:{
        trigger:".container",
        scroller:"body",
        start:"top 50%"
    }
})


gsap.from(".header",{
    x:0,
    opacity:0,
    duration:2.8,
    scrollTrigger:{
        trigger:".header",
        scroller:"body",
        start:"top 50%"
    }
})


gsap.from(".content",{
    x:0,
    opacity:0,
    duration:4.5,
    scrollTrigger:{
        trigger:".content",
        scroller:"body",
        start:"top 50%"
    }
})

// === Smooth Scroll with Lenis ===
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// script.js
const width = window.innerWidth;

if (width <= 864 && !window.location.href.includes("/mobile/")) {
  // Mobile users ke liye redirect
  window.location.href = "mobile/index.html";
} else if (width > 864 && width <= 1024 && !window.location.href.includes("/mobile/")) {
  // Tablet users ke liye redirect
  window.location.href = "mobile/index.html";
}

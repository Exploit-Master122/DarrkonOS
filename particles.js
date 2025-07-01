// particles.js config
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: {
      enable: true,
      distance: 100,
      opacity: 0.3
    },
    color: { value: "#ffffff" }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

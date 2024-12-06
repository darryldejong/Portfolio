document.addEventListener("DOMContentLoaded", function() {

  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('mouseover', function() {
      link.style.textDecoration = 'underline';
    });

    link.addEventListener('mouseout', function() {
      link.style.textDecoration = 'none';
    });
  });

  const socialMediaText = document.querySelector('footer .socialmedia p');

  if (socialMediaText) {
    socialMediaText.addEventListener('mouseover', function() {
      socialMediaText.style.textDecoration = 'underline';
    });

    socialMediaText.addEventListener('mouseout', function() {
      socialMediaText.style.textDecoration = 'none';
    });
  }

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const linksArray = [
    { selector: 'a[href="#projects"]', target: '#projects' },
    { selector: 'a[href="#contact"]', target: '#contact' },
    { selector: 'a[href="#aboutme"]', target: '#aboutme' }
  ];

  linksArray.forEach(link => {
    const anchor = document.querySelector(link.selector);
    if (anchor) {
      anchor.addEventListener('click', () => scrollToSection(link.target));
    }
  });

    particlesJS("particlesabout", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ff0c00" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 100, color: "#ff0c00", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "bubble" },
          onclick: { enable: false, mode: "repulse" },
          resize: false,
        },
      },
      retina_detect: true,
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const hackerrankCerts = [
    { text: "Hackerrank Python (Basic)", color: "green" },
    { text: "Hackerrank SQL (Basic)", color: "red" },
    { text: "Hackerrank CSS (Basic)", color: "blue" }
  ];

  let currentIndex = 0;

  const hackerrankIcon = document.getElementById("hackerrankicon");
  const hackerrankText = document.getElementById("hackerranktext");
  const leftArrow = document.getElementById("leftarrow");
  const rightArrow = document.getElementById("rightarrow");

  function updateCertificate(index) {
    hackerrankIcon.style.color = hackerrankCerts[index].color;
    hackerrankText.textContent = hackerrankCerts[index].text;
  }

  leftArrow.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + hackerrankCerts.length) % hackerrankCerts.length;
    updateCertificate(currentIndex);
  });

  rightArrow.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % hackerrankCerts.length;
    updateCertificate(currentIndex);
  });

  updateCertificate(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particlesskills", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#29cc29" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#29cc29", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none" },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: false,
      },
    },
    retina_detect: true,
  });

  particlesJS("particlescertifications", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#0000ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 100, color: "#0000ff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none" },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "repulse" },
        resize: false,
      },
    },
    retina_detect: true,
  });

    particlesJS("particlesfooter", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#fc83e5" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 100, color: "#fc83e5", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "bubble" },
          onclick: { enable: false, mode: "repulse" },
          resize: false,
        },
      },
      retina_detect: true,
    });
});

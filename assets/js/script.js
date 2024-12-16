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

  const particlesConfigurations = [
    { id: "particlesabout", color: "#ff0c00" },
    { id: "particlesskills", color: "#29cc29" },
    { id: "particlescertifications", color: "#0000ff" },
    { id: "particlesfooter", color: "#fc83e5" }
  ];

  particlesConfigurations.forEach(config => {
    particlesJS(config.id, {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: config.color },
        shape: { type: "circle" },
        opacity: { value: 0.7 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 100, color: config.color, opacity: 0.4, width: 1 },
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

  const certificationLinks = {
    "Hackerrank Python (Basic) - okt. 2024": "https://www.hackerrank.com/certificates/iframe/ff7695dca3f7",
    "Hackerrank SQL (Basic) - okt. 2024": "https://www.hackerrank.com/certificates/iframe/c8442b83ff34",
    "Hackerrank CSS (Basic) - okt. 2024": "https://www.hackerrank.com/certificates/iframe/6b1a21deff5c"
  };

  const hackerrankCerts = [
    { text: "Hackerrank Python (Basic) - okt. 2024", color: "orange" },
    { text: "Hackerrank SQL (Basic) - okt. 2024", color: "red" },
    { text: "Hackerrank CSS (Basic) - okt. 2024", color: "blue" }
  ];

  let currentIndex = 0;
  const hackerrankIcon = document.getElementById("hackerrankicon");
  const hackerrankText = document.getElementById("hackerranktext");
  const leftArrow = document.getElementById("leftarrow");
  const rightArrow = document.getElementById("rightarrow");

  function updateCertificate(index) {
    const currentCert = hackerrankCerts[index];
    hackerrankIcon.style.color = currentCert.color;
    
    const certLink = document.createElement('a');
    certLink.href = certificationLinks[currentCert.text];
    certLink.textContent = currentCert.text;
    certLink.target = "_blank";
    certLink.style.color = 'inherit';
    certLink.style.textDecoration = 'none';
    certLink.style.cursor = 'pointer';

    certLink.addEventListener('mouseover', function() {
      this.style.color = 'blue';
      this.style.textDecoration = 'underline';
    });
    
    certLink.addEventListener('mouseout', function() {
      this.style.color = 'inherit';
      this.style.textDecoration = 'none';
    });

    hackerrankText.innerHTML = '';
    hackerrankText.appendChild(certLink);
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

  const ciscoCerts = [
    { text: "Cybersecurity Fundamentals - dec. 2024", link: "https://www.credly.com/badges/749c4ff2-f024-48dc-985c-76322e15c511/public_url", color: "#F33A6A" },
    { text: "Cisco Linux Essentials - jul. 2023", link: "https://www.netacad.com/courses/linux-essentials?courseLang=en-US", color: "#0000ff" }
  ];

  let ciscoIndex = 0;
  const ciscoIcon = document.getElementById("ciscoicon");
  const ciscoCertText = ciscoIcon.nextElementSibling;
  const leftArrowCisco = document.getElementById("leftarrow-cisco");
  const rightArrowCisco = document.getElementById("rightarrow-cisco");

  function updateCiscoCertificate(index) {
    const currentCert = ciscoCerts[index];
    ciscoIcon.style.color = currentCert.color;
    
    const ciscoLink = document.createElement('a');
    ciscoLink.href = currentCert.link;
    ciscoLink.textContent = currentCert.text;
    ciscoLink.target = "_blank";
    ciscoLink.style.color = 'inherit';
    ciscoLink.style.textDecoration = 'none';
    ciscoLink.style.cursor = 'pointer';

    ciscoLink.addEventListener('mouseover', function() {
      this.style.color = 'blue';
      this.style.textDecoration = 'underline';
    });
    
    ciscoLink.addEventListener('mouseout', function() {
      this.style.color = 'inherit';
      this.style.textDecoration = 'none';
    });

    ciscoCertText.innerHTML = '';
    ciscoCertText.appendChild(ciscoLink);
  }

  leftArrowCisco.addEventListener("click", function() {
    ciscoIndex = (ciscoIndex - 1 + ciscoCerts.length) % ciscoCerts.length;
    updateCiscoCertificate(ciscoIndex);
  });

  rightArrowCisco.addEventListener("click", function() {
    ciscoIndex = (ciscoIndex + 1) % ciscoCerts.length;
    updateCiscoCertificate(ciscoIndex);
  });

  updateCiscoCertificate(ciscoIndex);

});

function animateImageVertical() {
  const img = document.getElementById('wrf');
  
  img.classList.add('animate');
  
  setTimeout(() => {
    img.classList.remove('animate');
  }, 500);
}

function animateImage() {
  const img = document.getElementById('totodile');
  
  img.classList.add('animate');
  
  setTimeout(() => {
    img.classList.remove('animate');
  }, 500);
}

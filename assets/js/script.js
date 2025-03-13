// JavaScript

document.addEventListener("DOMContentLoaded", function() {

// Underline

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

// Scroll

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

// Href

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

// Particles

  const particlesConfigurations = [
    { id: "particles-footer", color: "#fc83e5" },
    { id: "particles-contact", color: "#144de7" }
  ];

  particlesConfigurations.forEach(config => {
    particlesJS(config.id, {
      particles: {
        number: { value: 5, density: { enable: true, value_area: 100 } },
        color: { value: config.color },
        shape: { type: "circle" },
        opacity: { value: 0.8 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 15, color: config.color, opacity: 0.7, width: 1 },
        move: { enable: true, speed: 1, direction: "none" },
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

// Certificates

  const certificationLinks = {
    "Hackerrank Python (Basic) - okt. 2024": "https://www.hackerrank.com/certificates/iframe/ff7695dca3f7",
    "Hackerrank SQL (Basic) - okt. 2024": "https://www.hackerrank.com/certificates/iframe/c8442b83ff34",
    "Hackerrank CSS (Basic) - okt. 2024": "https://www.hackerrank.com/certificates/iframe/6b1a21deff5c",
    "Hackerrank Problem Solving (Basic) - okt. 2024": "https://www.hackerrank.com/certificates/iframe/c41e14aad98d",
    "Hackerrank JavaScript (Basic) - okt. 2024": "https://www.hackerrank.com/certificates/iframe/5beb0107a008"
  };

  const hackerrankCerts = [
    { text: "Hackerrank SQL (Basic) - okt. 2024", color: "#0066CC" },
    { text: "Hackerrank Python (Basic) - okt. 2024", color: "#2E8B57" },
    { text: "Hackerrank CSS (Basic) - okt. 2024", color: "#E69500" },
    { text: "Hackerrank Problem Solving (Basic) - dec. 2024", color: "#800080" },
    { text: "Hackerrank JavaScript (Basic) - dec. 2024", color: "#008080" }
  ];

  let currentIndex = 0;
  const certificateIcon = document.getElementById("certificateicon");
  const certificateText = document.getElementById("certificatetext");
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");

  function updateCertificate(index) {
    const currentCert = hackerrankCerts[index];
    certificateIcon.style.color = currentCert.color;
    
    const certLink = document.createElement('a');
    certLink.href = certificationLinks[currentCert.text];
    certLink.textContent = currentCert.text;
    certLink.target = "_blank";
    certLink.style.color = currentCert.color;
    certLink.style.textDecoration = 'none';
    certLink.style.cursor = 'pointer';

    certLink.addEventListener('mouseover', function() {
      this.style.color = '#1a3ca3';
      this.style.textDecoration = 'underline';
    });
    
    certLink.addEventListener('mouseout', function() {
      this.style.color = currentCert.color;
      this.style.textDecoration = 'none';
    });

    certificateText.innerHTML = '';
    certificateText.appendChild(certLink);
  }

  arrowLeft.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + hackerrankCerts.length) % hackerrankCerts.length;
    updateCertificate(currentIndex);
  });

  arrowRight.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % hackerrankCerts.length;
    updateCertificate(currentIndex);
  });

  updateCertificate(currentIndex);

  const certificateCerts = [
    { text: "IBM Cybersecurity Fundamentals - dec. 2024", link: "https://www.credly.com/badges/749c4ff2-f024-48dc-985c-76322e15c511/public_url", color: "#E91E63" },
    { text: "Cisco Linux Essentials - jul. 2023", link: "https://www.netacad.com/courses/linux-essentials?courseLang=en-US", color: "#F1C40F" },
    { text: "Certified Secure Safe Internet - feb. 2025", link: "https://www.certifiedsecure.com/profile/CS-13022583670", color: "#27AE60" },
    { text: "Certified Secure Safe Internet Plus - feb. 2025", link: "https://www.certifiedsecure.com/profile/CS-13022583670", color: "#8E44AD" },
    { text: "Cisco Python Essentials 1 - jan. 2025", link: "https://www.credly.com/badges/6ab5b58e-9112-4419-8dda-f285c672ab98/public_url", color: "#2980B9" }
  ];  

  let certificateIndex = 0;
  const trophyIcon = document.getElementById("trophyicon");
  const certificateCertText = trophyIcon.nextElementSibling;
  const arrowLeftTwo = document.getElementById("arrow-left-two");
  const arrowRightTwo = document.getElementById("arrow-right-two");

  function updatecertificateCertificate(index) {
    const currentCert = certificateCerts[index];
    trophyIcon.style.color = currentCert.color;
    
    const certificateLink = document.createElement('a');
    certificateLink.href = currentCert.link;
    certificateLink.textContent = currentCert.text;
    certificateLink.target = "_blank";
    certificateLink.style.color = currentCert.color;
    certificateLink.style.textDecoration = 'none';
    certificateLink.style.cursor = 'pointer';

    certificateLink.addEventListener('mouseover', function() {
      this.style.color = '#1a3ca3';
      this.style.textDecoration = 'underline';
    });
    
    certificateLink.addEventListener('mouseout', function() {
      this.style.color = currentCert.color;
      this.style.textDecoration = 'none';
    });

    certificateCertText.innerHTML = '';
    certificateCertText.appendChild(certificateLink);
  }

  arrowLeftTwo.addEventListener("click", function() {
    certificateIndex = (certificateIndex - 1 + certificateCerts.length) % certificateCerts.length;
    updatecertificateCertificate(certificateIndex);
  });

  arrowRightTwo.addEventListener("click", function() {
    certificateIndex = (certificateIndex + 1) % certificateCerts.length;
    updatecertificateCertificate(certificateIndex);
  });

  updatecertificateCertificate(certificateIndex);

});

// Aboutme

function animateImageVertical() {
  const img = document.getElementById('cobalt');
  
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

document.getElementById('Charizard').addEventListener('click', function() {
  document.querySelector('.aboutmetext .text').classList.add('moved');

  setTimeout(function() {
    document.querySelector('.aboutmetext .text').classList.remove('moved');
  }, 1000);
});

let isAnimating = false;

function shuffleTextEffect(element, duration = 1000) {
    if (isAnimating) return;
    isAnimating = true;

    const originalText = element.innerText;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let iteration = 0;

    const interval = setInterval(() => {
        element.innerText = originalText
            .split("")
            .map((char, index) => {
                if (char === " ") return " ";
                return index < iteration ? originalText[index] : letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        if (iteration >= originalText.length) {
            clearInterval(interval);
            
            setTimeout(() => {
                element.innerText = originalText;
                isAnimating = false;
            }, 500);
        }
        iteration += 1;
    }, 50);
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("shuffleText");
  textElement.addEventListener("mouseenter", () => shuffleTextEffect(textElement));
});

// Contact
 
function adjustTextBasedOnWidth() {
  const contactText = document.getElementById('contact-text');
  
  if (window.innerWidth < 1024) {
    contactText.innerHTML = 'Reach out for work or anything else <br><span class="email-link">darryldjong@gmail.com <img src="assets/img/pikachu.webp" alt="Pikachu" class="pikachu-image"></span>';
  }
}

// Cookies

window.addEventListener('load', adjustTextBasedOnWidth);

window.addEventListener('resize', adjustTextBasedOnWidth);

window.onload = function() {
  if (localStorage.getItem('cookies-accepted') === 'true') {
    document.getElementById('cookie-banner').style.display = 'none';
    loadGoogleAnalytics();
  } else if (localStorage.getItem('cookies-accepted') === 'false') {
    document.getElementById('cookie-banner').style.display = 'none';
  } else {
    document.getElementById('cookie-banner').style.display = 'block';
  }

  document.getElementById('accept-cookies').onclick = function() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookies-accepted', 'true');
    loadGoogleAnalytics();
  };

  document.getElementById('reject-cookies').onclick = function() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookies-accepted', 'false');
  };

  function loadGoogleAnalytics() {
    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4GY3CSW481';
    script.async = true;
    document.head.appendChild(script);

    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-4GY3CSW481');
    };
  }
};

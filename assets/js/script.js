// JS

document.addEventListener("DOMContentLoaded", function() {

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

// About-me

function animateImageVertical() {
  const img = document.getElementById('pidgeot');
  
  img.classList.add('animate');
  
  setTimeout(() => {
    img.classList.remove('animate');
  }, 500);
}

function animateImage() {
  const img = document.getElementById('croconaw');
  
  img.classList.add('animate');
  
  setTimeout(() => {
    img.classList.remove('animate');
  }, 500);
}

document.getElementById('sprigatito').addEventListener('click', function() {
  document.querySelector('.about-me-text .text').classList.add('moved');

  setTimeout(function() {
    document.querySelector('.about-me-text .text').classList.remove('moved');
  }, 1000);
});
 
function adjustTextBasedOnWidth() {
}

// Cookies

window.addEventListener('load', function () {
  adjustTextBasedOnWidth();
  
  function isNetherlandsVersion() {
    return window.location.pathname.includes('/nl/');
  }

  setTimeout(() => {
    const cookieBanner = document.getElementById('cookie-banner');
    const cookiesAccepted = localStorage.getItem('cookies-accepted');

    if (cookiesAccepted === 'true') {
      loadGoogleAnalytics();
      logUserData();
    } else if (cookiesAccepted === 'false') {
      return;
    } else if (cookiesAccepted === 'custom') {
      applyCustomPreferences();
    } else {
      cookieBanner.style.display = 'block';
    }
  }, 10);

  document.getElementById('accept-cookies').onclick = function () {
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    
    if (cookiesAccepted !== 'true') {
      localStorage.setItem('cookies-accepted', 'true');
      localStorage.setItem('analytics-enabled', 'true');
      localStorage.setItem('cloud-storage-enabled', 'true');
      
      loadGoogleAnalytics();
      logUserData();
    }
    
    document.getElementById('cookie-banner').style.display = 'none';
  };

  document.getElementById('reject-cookies').onclick = function () {
    localStorage.setItem('cookies-accepted', 'false');
    document.getElementById('cookie-banner').style.display = 'none';
  };

  document.getElementById('manage-cookies').onclick = function () {
    showCookieManagementPopup();
  };

  function applyCustomPreferences() {
    if (localStorage.getItem('analytics-enabled') === 'true') {
      loadGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }

    if (localStorage.getItem('cloud-storage-enabled') === 'true') {
      logUserData();
    }
  }

  function disableGoogleAnalytics() {
    window['ga-disable-G-4GY3CSW481'] = true;
    document.querySelectorAll('script[src*="googletagmanager.com"]').forEach(script => script.remove());
    window.dataLayer = [];
  }

  function loadGoogleAnalytics() {
    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4GY3CSW481';
    script.async = true;
    document.head.appendChild(script);

    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-4GY3CSW481');
    };
  }

  function logUserData() {
    if (localStorage.getItem('cloud-storage-enabled') === 'true') {
      const userData = {};
      sendUserDataToCloudStorage(userData);
    }
  }

  function sendUserDataToCloudStorage(data) {
    fetch('/.netlify/functions/logUserData', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).catch(error => {});
  }

  function showCookieManagementPopup() {
    const existingOverlay = document.getElementById('cookie-management-overlay');
    if (existingOverlay) {
      existingOverlay.remove();
    }

    document.getElementById('cookie-banner').style.display = 'none';

    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'cookie-management-overlay';
    popupOverlay.className = 'cookie-overlay';

    const popup = document.createElement('div');
    popup.id = 'cookie-management-popup';
    popup.className = 'cookie-popup';

    const isNL = isNetherlandsVersion();

    const header = document.createElement('h2');
    header.textContent = isNL ? 'Cookievoorkeuren beheren' : 'Manage Cookie Preferences';
    header.className = 'cookie-popup-header';

    const description = document.createElement('p');
    description.textContent = isNL 
      ? 'Selecteer welke cookies je wilt accepteren. Je voorkeuren worden opgeslagen.' 
      : 'Select which cookies you want to accept. Your preferences will be saved.';
    description.className = 'cookie-popup-description';

    const analyticsSection = createToggleSection(
      'analytics-toggle',
      'Google Analytics',
      isNL 
        ? 'Helpt ons te begrijpen hoe bezoekers onze website gebruiken.' 
        : 'Helps us understand how visitors interact with our website.',
      localStorage.getItem('analytics-enabled') !== 'false'
    );

    const cloudStorageSection = createToggleSection(
      'cloud-storage-toggle',
      isNL ? 'Gebruikersgegevensopslag' : 'User Data Storage',
      isNL 
        ? 'Gebruikt om gebruikersvoorkeuren op te slaan, gebruikersactiviteiten bij te houden en een gepersonaliseerde ervaring te bieden.' 
        : 'Used to store user preferences, track user activities, and provide a personalized experience.',
      localStorage.getItem('cloud-storage-enabled') !== 'false'
    );

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'cookie-buttons-container';

    const saveButton = document.createElement('button');
    saveButton.textContent = isNL ? 'VOORKEUREN OPSLAAN' : 'SAVE PREFERENCES';
    saveButton.className = 'cookie-save-btn';

    const closeButton = document.createElement('button');
    closeButton.textContent = isNL ? 'WIJZIGINGEN ANNULEREN' : 'DISMISS CHANGES';
    closeButton.className = 'cookie-close-btn';

    saveButton.onclick = function () {
      saveCookiePreferences();
      popupOverlay.style.display = 'none';
    };

    closeButton.onclick = function () {
      popupOverlay.style.display = 'none';
      const cookiesAccepted = localStorage.getItem('cookies-accepted');
      if (cookiesAccepted !== 'true' && cookiesAccepted !== 'false') {
        document.getElementById('cookie-banner').style.display = 'block';
      }
    };

    buttonsContainer.appendChild(saveButton);
    buttonsContainer.appendChild(closeButton);

    popup.appendChild(header);
    popup.appendChild(description);
    popup.appendChild(analyticsSection);
    popup.appendChild(cloudStorageSection);
    popup.appendChild(buttonsContainer);

    popupOverlay.appendChild(popup);
    document.body.appendChild(popupOverlay);
    popupOverlay.style.display = 'flex';
  }

  function createToggleSection(id, title, description, isChecked) {
    const container = document.createElement('div');
    container.className = 'cookie-toggle-section';

    const header = document.createElement('div');
    header.className = 'cookie-toggle-header';

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.className = 'cookie-toggle-title';

    const toggle = document.createElement('label');
    toggle.className = 'cookie-switch';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    checkbox.className = 'cookie-checkbox';
    checkbox.checked = isChecked;

    const slider = document.createElement('span');
    slider.className = 'cookie-slider';

    const desc = document.createElement('p');
    desc.textContent = description;
    desc.className = 'cookie-toggle-description';

    toggle.appendChild(checkbox);
    toggle.appendChild(slider);

    header.appendChild(titleElement);
    header.appendChild(toggle);

    container.appendChild(header);
    container.appendChild(desc);

    return container;
  }

  function saveCookiePreferences() {
    const analyticsEnabled = document.getElementById('analytics-toggle').checked;
    const cloudStorageEnabled = document.getElementById('cloud-storage-toggle').checked;

    localStorage.setItem('analytics-enabled', analyticsEnabled);
    localStorage.setItem('cloud-storage-enabled', cloudStorageEnabled);
    localStorage.setItem('cookies-accepted', 'custom');

    document.getElementById('cookie-banner').style.display = 'none';

    const dataToSend = {};

    if (analyticsEnabled) {
      dataToSend.analytics = true;
    }

    if (cloudStorageEnabled) {
      dataToSend.cloudStorage = true;
    }

    if (Object.keys(dataToSend).length > 0 && cloudStorageEnabled) {
      sendUserDataToCloudStorage(dataToSend);
    }

    if (analyticsEnabled) {
      loadGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }
  }
});

window.addEventListener('resize', adjustTextBasedOnWidth);

// Switch theme

document.getElementById("darkModeToggle").addEventListener("click", function(event) {
  const themeGif = document.getElementById("themeGif");

  if (event.target.tagName === 'IMG') {
    event.preventDefault();

    document.body.classList.toggle("dark-mode");

    themeGif.src = document.body.classList.contains("dark-mode")
      ? "../assets/img/rattata.gif"
      : "../assets/img/nidorina.gif";

    const effect = document.createElement("div");
    effect.className = "dark-mode-effect";
    document.body.appendChild(effect);

    setTimeout(() => {
      effect.remove();
    }, 500);
  }
});

// Scroll to top

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Progress bar

document.addEventListener('DOMContentLoaded', function () {
  const downloadButton = document.getElementById('downloadButton');
  const progressBar = document.getElementById('progressBar');
  let progress = 0;
  let lastTime = 0;
  let isDownloading = false;

  function resetProgress() {
    progress = 0;
    progressBar.style.width = '0%';
  }

  function updateProgress(timestamp) {
    if (!isDownloading) return;

    const progressIncrement = Math.min(100, (timestamp - lastTime) / 20);
    progress += progressIncrement;
    progressBar.style.width = progress + '%';

    if (progress < 100) {
      lastTime = timestamp;
      requestAnimationFrame(updateProgress);
    } else {
      window.open('../assets/docs/Resume.pdf', '_blank');
      setTimeout(() => {
        resetProgress();
        isDownloading = false;
      }, 300);
    }
  }

  function startDownload() {
    resetProgress();
    isDownloading = true;
    lastTime = performance.now();
    requestAnimationFrame(updateProgress);
  }

  function cancelDownload() {
    if (progress < 100) {
      resetProgress();
      isDownloading = false;
    }
  }

  downloadButton.addEventListener('mousedown', startDownload);
  downloadButton.addEventListener('mouseup', cancelDownload);
  downloadButton.addEventListener('mouseleave', cancelDownload);

  downloadButton.addEventListener('touchstart', startDownload, { passive: false });
  downloadButton.addEventListener('touchend', cancelDownload);
  downloadButton.addEventListener('touchcancel', cancelDownload);
});

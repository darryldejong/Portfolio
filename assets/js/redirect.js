var userLanguage = navigator.language || navigator.userLanguage;

if (userLanguage && userLanguage.startsWith("nl") && !window.location.pathname.startsWith("/nl")) {
    window.location.href = "/nl";
} else if (userLanguage && !userLanguage.startsWith("nl") && !window.location.pathname.startsWith("/en")) {
    window.location.href = "/en";
}

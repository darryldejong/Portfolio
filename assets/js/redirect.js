var userLanguage = navigator.language || navigator.userLanguage;

if (!localStorage.getItem("languageRedirected")) {
    if (userLanguage.startsWith("nl") && !window.location.pathname.startsWith("/nl")) {
        window.location.href = "/nl";
        localStorage.setItem("languageRedirected", "true");
    } 
    else if (!userLanguage.startsWith("nl") && !window.location.pathname.startsWith("/en")) {
        window.location.href = "/en";
        localStorage.setItem("languageRedirected", "true");
    }
}

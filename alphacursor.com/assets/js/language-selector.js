if (localStorage.getItem("language") == null)
    localStorage.setItem("language", navigator.language);

if (localStorage.getItem("language") == 'tr' && window.location.pathname !== "/i18n/tr/index.html")
    document.location.href = './i18n/tr/index.html';


document.addEventListener("DOMContentLoaded", function (event) {
    let languageLinks = document.getElementsByClassName("language");

    for (let i = 0; i < languageLinks.length; i++) {
        languageLinks[i].addEventListener("click",
            function (event) {
                if (languageLinks[i].classList.contains("turkish"))
                    localStorage.setItem("language", 'tr');
                else
                    localStorage.setItem("language", 'en');
            },
            false);
    }
});
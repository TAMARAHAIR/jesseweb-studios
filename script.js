
document.addEventListener("DOMContentLoaded", function () {

    // CURRENT YEAR
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("show");

            menuToggle.textContent = isOpen ? "✕" : "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("show");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });
    }

    // DARK AND LIGHT MODE
    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("jesseweb-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    function updateThemeIcon() {

        if (!themeToggle) return;

        themeToggle.textContent =
            document.body.classList.contains("light-mode")
                ? "☾"
                : "☼";
    }

    updateThemeIcon();

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("light-mode");

            const theme =
                document.body.classList.contains("light-mode")
                    ? "light"
                    : "dark";

            localStorage.setItem("jesseweb-theme", theme);

            updateThemeIcon();

        });
    }

    // SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }

});

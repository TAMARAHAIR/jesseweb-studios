
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


        
/* =========================================
   JESSEWEB STUDIO - CONTACT FORM
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  // Read a selected package from the pricing page.
  const params = new URLSearchParams(window.location.search);
  const selectedPackage = params.get("package");

  const projectSelect = document.getElementById("projectType");

  if (selectedPackage && projectSelect) {
    const packageOption = document.createElement("option");
    packageOption.value = selectedPackage;
    packageOption.textContent = selectedPackage;
    packageOption.selected = true;
    projectSelect.appendChild(packageOption);
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const project = document.getElementById("projectType").value;
    const budget = document.getElementById("projectBudget").value;
    const message = document.getElementById("projectMessage").value.trim();
    const feedback = document.getElementById("formFeedback");

    if (!name || !email || !project || !message) {
      feedback.textContent = "Please complete all required fields.";
      return;
    }

    const whatsappMessage =
      "Hello JesseWeb Studio!%0A%0A" +
      "*NEW PROJECT ENQUIRY*%0A%0A" +
      "*Name:* " + encodeURIComponent(name) + "%0A" +
      "*Email:* " + encodeURIComponent(email) + "%0A" +
      "*Service:* " + encodeURIComponent(project) + "%0A" +
      "*Budget:* " + encodeURIComponent(budget || "Not specified") + "%0A" +
      "*Project details:* " + encodeURIComponent(message);

    const whatsappURL =
      "https://wa.me/2347034457988?text=" + whatsappMessage;

    feedback.textContent = "Opening WhatsApp. Review your message and press Send.";

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
});


    }

});


// ======================================
// JESSEWEB STUDIO - ECOMMERCE INTERACTIONS
// ======================================

// Animate pricing cards when they enter the screen
const ecommerceCards = document.querySelectorAll(".ecommerce-card");

if ("IntersectionObserver" in window) {
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("card-visible");
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    ecommerceCards.forEach((card) => {
        card.classList.add("card-hidden");
        cardObserver.observe(card);
    });
} else {
    ecommerceCards.forEach((card) => {
        card.classList.add("card-visible");
    });
}


// Package selection interaction
const packageButtons = document.querySelectorAll(".package-button");

packageButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const packageName = this.closest(".ecommerce-card")
            ?.querySelector("h3")?.textContent;

        if (packageName) {
            console.log("Selected package:", packageName);
        }
    });
});


// Pricing card hover effect for pointer devices
ecommerceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("card-active");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("card-active");
    });
});


// Current year for website footer
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

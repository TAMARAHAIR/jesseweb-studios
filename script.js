
/* =====================================
   JESSEWEB STUDIO - JAVASCRIPT
===================================== */

// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const opened = navLinks.classList.toggle("open");

        menuBtn.textContent = opened ? "✕" : "☰";

        menuBtn.setAttribute("aria-expanded", opened);

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}


// DARK AND LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        themeBtn.textContent = isLight ? "☾" : "☀";

        themeBtn.setAttribute(
            "aria-label",
            isLight ? "Switch to dark mode" : "Switch to light mode"
        );

    });

}


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


// FAQ ACCORDION

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const currentItem = button.parentElement;

        const wasOpen = currentItem.classList.contains("open");

        document.querySelectorAll(".faq-item").forEach(item => {

            item.classList.remove("open");

        });

        if (!wasOpen) {

            currentItem.classList.add("open");

        }

    });

});


// WHATSAPP CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        if (!contactForm.reportValidity()) {

            return;

        }

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("clientEmail").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();

        const whatsappMessage = `
Hello JesseWeb Studio!

I would like to enquire about your services.

Name: ${name}

Email: ${email}

Service: ${service}

Project Details:
${message}

I look forward to hearing from you.
        `.trim();

        const whatsappURL =
            "https://wa.me/2347034457988?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

console.log("JesseWeb Studio JavaScript loaded successfully!");

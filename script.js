document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       FAQ ACCORDION
    ========================= */

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const faqItem = this.closest(".faq-item");
            const faqAnswer = faqItem.querySelector(".faq-answer");
            const icon = this.querySelector("i");

            // Close all other FAQs
            document.querySelectorAll(".faq-item").forEach(function (item) {

                if (item !== faqItem) {
                    item.classList.remove("active");

                    const answer = item.querySelector(".faq-answer");
                    if (answer) {
                        answer.style.maxHeight = null;
                    }

                    const otherIcon = item.querySelector(".faq-question i");
                    if (otherIcon) {
                        otherIcon.style.transform = "rotate(0deg)";
                    }
                }

            });

            // Toggle current FAQ
            faqItem.classList.toggle("active");

            if (faqItem.classList.contains("active")) {

                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";

                if (icon) {
                    icon.style.transform = "rotate(45deg)";
                }

            } else {

                faqAnswer.style.maxHeight = null;

                if (icon) {
                    icon.style.transform = "rotate(0deg)";
                }

            }

        });

    });

});





/* =========================================================
   PROJECT LOADER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("projectLoader");

    if (!loader) return;

    const projectLinks = document.querySelectorAll(
        '.project-image a[href], .project-info a[href]'
    );

    projectLinks.forEach(function (link) {

        // Never show the loader for the Back to Portfolio button
        if (link.classList.contains("back-to-portfolio")) {
            return;
        }

        link.addEventListener("click", function (event) {

            const destination = this.href;

            if (
                !destination ||
                destination === "#" ||
                destination.includes("#")
            ) {
                return;
            }

            event.preventDefault();

            loader.classList.add("active");

            setTimeout(function () {
                window.location.href = destination;
            }, 1200);

        });

    });

});


/* =========================================================
   REMOVE LOADER WHEN RETURNING TO PORTFOLIO
========================================================= */

window.addEventListener("pageshow", function () {

    const loader = document.getElementById("projectLoader");

    if (loader) {
        loader.classList.remove("active");
    }

});



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("bi-list");
            icon.classList.add("bi-x-lg");
        } else {
            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");
        }

    });


    // Close mobile menu when a link is clicked

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        });

    });

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");


        // Close all other FAQ items

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        // Open the clicked item

        if (!isOpen) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATIONS
========================================================= */

// Add reveal class to sections and cards

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-heading, " +
    ".about-content, " +
    ".service-card, " +
    ".project-card, " +
    ".why-item, " +
    ".process-step, " +
    ".price-card, " +
    ".payment-step, " +
    ".faq-item, " +
    ".contact-box"
);


revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

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


/* =========================================================
   STAGGERED CARD ANIMATION
========================================================= */

const cardGroups = [
    ".services-grid .service-card",
    ".projects-grid .project-card",
    ".pricing-grid .price-card",
    ".process-grid .process-step"
];


cardGroups.forEach(selector => {

    const cards = document.querySelectorAll(selector);

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });

});


/* =========================================================
   SMOOTH ANCHOR SCROLLING
========================================================= */

const anchorLinks = document.querySelectorAll(
    'a[href^="#"]'
);

anchorLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const navbarHeight =
            document.querySelector(".navbar").offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   PROJECT LINKS
========================================================= */

// Prevent placeholder project links from jumping to the top

const projectLinks = document.querySelectorAll(
    ".project-overlay a"
);

projectLinks.forEach(link => {

    link.addEventListener("click", event => {

        if (link.getAttribute("href") === "#") {
            event.preventDefault();
        }

    });

});


/* =========================================================
   REDUCED MOTION SUPPORT
========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (prefersReducedMotion) {

    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            element.classList.add("show");

        });

}

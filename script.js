/* ==========================================================
   JAYDEEP GAIKWAD PORTFOLIO
   script.js
==========================================================*/

/* ================= SCROLL TO TOP ================= */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ================= SMOOTH SCROLL ================= */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ================= REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(

    ".skill-card, .timeline-item, .project-card, .cert-card, .education-card, .achievement-card, .contact-card"

);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

revealElements.forEach((el) => {

    el.classList.add("hidden-element");

    observer.observe(el);

});

/* ================= CURRENT YEAR ================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =

        "© " +

        new Date().getFullYear() +

        " Jaydeep Gaikwad<br>Built using HTML, CSS & JavaScript";

}
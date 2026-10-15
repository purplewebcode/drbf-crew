/* =========================================
   HEADER
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


function animateCursor() {

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";


    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;


    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";


    requestAnimationFrame(animateCursor);

}

animateCursor();


/* =========================================
   CURSOR HOVER
========================================= */

const interactiveElements = document.querySelectorAll(
    "a, button, .member-card, .gallery-item, .style-item"
);


interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        follower.style.width = "60px";
        follower.style.height = "60px";

    });


    element.addEventListener("mouseleave", () => {

        follower.style.width = "35px";
        follower.style.height = "35px";

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealSections = document.querySelectorAll(
    ".section, .styles-section, .quote-section, .instagram-section, .contact-section"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealSections.forEach(section => {

    observer.observe(section);

});


/* =========================================
   PARALLAX HERO
========================================= */

const heroBackground =
    document.querySelector(".hero-background");


window.addEventListener("scroll", () => {

    if (!heroBackground) return;

    const scrollPosition = window.scrollY;

    heroBackground.style.transform =
        `scale(1.08) translateY(${scrollPosition * 0.15}px)`;

});


/* =========================================
   GALLERY
========================================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.zIndex = "5";

    });


    item.addEventListener("mouseleave", () => {

        item.style.zIndex = "1";

    });

});


/* =========================================
   SMOOTH ANCHOR
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});
// Select the heading
const heading = document.querySelector('.about-heading-main');

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Listen for scroll
window.addEventListener('scroll', () => {
    if (isInViewport(heading)) {
        heading.classList.add('animate-heading');
    }
});
//Smooth Scroll 
function smoothScrollTo(elementId, duration = 1000) {
    const target = document.getElementById(elementId);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // ease function for smoothness (easeInOutCubic)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

document.getElementById("viewProjectsBtn").addEventListener("click", function () {
    smoothScrollTo("projects", 2500); // duration in ms (increase for slower scroll)
});
// Smooth Scroll End 

// Email

   // Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        emailjs.sendForm(
            "service_kjq69w4",
            "template_17pe4qe",
            this,
            "wqfd4XHlALWpmjovD"
        )
        .then(function () {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch(function (error) {
            console.error("FAILED...", error);
            alert("Something went wrong. Check console.");
        });
    });

});
//    Email End


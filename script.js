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

//list style
const items = document.querySelectorAll('.values-list li');
// let index = 0;

function activateNext() {
    items.forEach(item => item.classList.remove('active'));

    items[index].classList.add('active');

    index++;
    if (index >= items.length) {
        index = 0;
    }
}

setInterval(activateNext, 1500);

//customes carousel
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

nextBtn.addEventListener('click', () => {
    index++;
    track.style.transform = `translateX(-${index * 52}%)`;
});

prevBtn.addEventListener('click', () => {
    if(index > 0){
        index--;
        track.style.transform = `translateX(-${index * 52}%)`;
    }
});


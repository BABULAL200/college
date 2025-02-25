let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    index += step;

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    document.querySelector(".slider").style.transform = `translateX(${-index * 100}%)`;
}

const prev = document.querySelector('btn-prev'),
    next = document.querySelector('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }

    dots[n].classList.add('active');
}
const prepareCurentSlide = ind => {
    activSlide(ind);
    activDot(ind);
}
const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurentSlide(index);
    } else {
        index++;
        prepareCurentSlide(index);
    }
}
const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        prepareCurentSlide(index);
    } else {
        index--;
        prepareCurentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    index = indexDot;
    prepareCurentSlide(index);
})


document.addEventListener('click', nextSlide);
document.addEventListener('click', prevSlide);
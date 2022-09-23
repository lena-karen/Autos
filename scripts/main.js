const mainLinkEl = document.querySelector('#main-link');
const catalogLinkEl = document.querySelector('#catalog-link');
const orderLinkEl = document.querySelector('#order-link');
const catalogBlockEl = document.querySelector('.catalog');
const orderBlockEl = document.querySelector('.order');
const showAutosBtn = document.querySelector('#show-autos');
const catalogBtnEl = document.querySelectorAll('.catalog-btn');
const orderBtnEl = document.querySelector('.order-btn');
const inputNameEl = document.querySelector('#name');
const inputPhoneEl = document.querySelector('#phone');
const inputAutoEl = document.querySelector('#auto');

showAutosBtn.addEventListener("click", () => catalogBlockEl.scrollIntoView({behavior: 'smooth'}));
catalogBtnEl.forEach((el) => {
    el.addEventListener("click", () => orderBlockEl.scrollIntoView({behavior: 'smooth'}));
});

orderBtnEl.addEventListener("click", () => {
    if (inputNameEl.value === "") {
        alert('Enter your name');
    } else if (inputPhoneEl.value === "") {
        alert('Enter your phone');
    } else if (inputAutoEl.value === "") {
        alert('Enter the car you are interested in');
    } else {
        alert("Thank you for your order. We'll contact you as soon as possible");
    }
});


let layer = document.querySelector('.order-img');
document.addEventListener('mousemove', (event) => {
   
    layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});

const elem = document.querySelector(".main");

document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
});
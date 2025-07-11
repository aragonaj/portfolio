const cards = document.getElementsByClassName('project-card');

// Habilidades
const bootstrapSkill = document.getElementById('bootstrap-skill');
const laravelSkill = document.getElementById('laravel-skill');
const csharpSkill = document.getElementById('csharp-skill');

function hideCardsBootstrap(){
    for (let card of cards) {
        if (card.getElementsByClassName('card-skill-bootstrap').length === 0) {
            card.style.display = "none";
        }
    }
}

function hideCardsLaravel(){
    for (let card of cards) {
        if (card.getElementsByClassName('card-skill-laravel').length === 0) {
            card.style.display = "none";
        }
    }
}

function hideCardsCSharp(){
    for (let card of cards) {
        if (card.getElementsByClassName('card-skill-csharp').length === 0) {
            card.style.display = "none";
        }
    }
}

function showAll(){
    for (let card of cards) {
        card.style.display = "flex";  
    }
}

bootstrapSkill.addEventListener('mouseover', hideCardsBootstrap);
bootstrapSkill.addEventListener('mouseleave', showAll);

laravelSkill.addEventListener('mouseover', hideCardsLaravel);
laravelSkill.addEventListener('mouseleave', showAll);

csharpSkill.addEventListener('mouseover', hideCardsCSharp);
csharpSkill.addEventListener('mouseleave', showAll);

// 
const profileSection = document.querySelector('.section-profile');
const projectSection = document.querySelector('.section-projects');
const contactSection = document.querySelector('.section-contact');

const navigationItems = document.querySelectorAll('.navigation__item');

const threshold = { threshold: 0.5 };

function observarPerfil(entries) {
    let entry = entries[0]; // Corrección: Obtener el primer elemento
    if (entry.isIntersecting){
        navigationItems[0].classList.add('navigation__item--active'); // Selección específica del primer elemento
    } else {
        navigationItems[0].classList.remove('navigation__item--active');
    }
}

function observarProyecto(entries){
    let entry = entries[0];
    if (entry.isIntersecting){
        navigationItems[1].classList.add('navigation__item--active'); // Segundo elemento de navegación
    } else {
        navigationItems[1].classList.remove('navigation__item--active');
    }
}

function observarContacto(entries){
    let entry = entries[0];
    if (entry.isIntersecting){
        navigationItems[2].classList.add('navigation__item--active'); // Tercer elemento de navegación
    } else {
        navigationItems[2].classList.remove('navigation__item--active');
    }
}

const observadorProfileSection = new IntersectionObserver(observarPerfil, threshold);
const observadorProjectSection = new IntersectionObserver(observarProyecto, threshold);
const observadorContactSection = new IntersectionObserver(observarContacto, threshold);

observadorProfileSection.observe(profileSection);
observadorProjectSection.observe(projectSection);
observadorContactSection.observe(contactSection);

//
const chevronDown = document.querySelector('.icon-chevron-down');
const chevronUp = document.querySelector('.icon-chevron-up');
// const firstSkill = document.querySelector('.first-skill');
const lastSkill = document.querySelector('.last-skill');
const firstSkill = document.querySelector('.first-skill');

const thresholdSkill = { threshold: 0.5 }; // 0.6

// function observeFirstSkill(entries){
//     let entry = entries[0];
//     if (entry.isIntersecting){
//         chevron.classList.add('opacity-1');
//     } else {
//         chevron.classList.remove('opacity-1');
//     }
// }

function observeLastSkill(entries){
    let entry = entries[0];
    if (entry.isIntersecting){
        chevronDown.classList.add('display-none');
    } else {
        chevronDown.classList.remove('display-none');
    }
}

function observeFirstSkill(entries){
    let entry = entries[0];
    if (entry.isIntersecting){
        chevronUp.classList.add('display-none');
    } else {
        chevronUp.classList.remove('display-none');
    }
}

// const observerFirstSkill = new IntersectionObserver(observeFirstSkill, thresholdSkill);
const observerLastSkill = new IntersectionObserver(observeLastSkill, thresholdSkill);
const observerFirstSkill = new IntersectionObserver(observeFirstSkill, thresholdSkill);
// observerFirstSkill.observe(firstSkill);
observerLastSkill.observe(lastSkill);
observerFirstSkill.observe(firstSkill);


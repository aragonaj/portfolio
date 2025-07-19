// Lógica del tema oscuro
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    // añade la clase darkMode al body
    document.body.classList.add('darkmode');

    // actualiza el darkMode en el almacenamiento local del navegador
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    // elimina la clase darkMode al body
    document.body.classList.remove('darkmode');

    // actualiza el darkMode en el almacenamiento local del navegador
    localStorage.setItem("darkMode", null);
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Lógica de mostrar los proyectos según los lenguajes empleados
// Accede a todos los lenguajes
const skillItems = document.querySelectorAll('.skills-scroll-item');

// Accede a los proyectos
const projectCards = document.querySelectorAll('.project-card');

// Declara que no hay lenguajes seleccionados por el usuario
let activeSkill = null;

// Declara si se ha seleccionado un lenguaje mediante click
// Nota: también un usuario puede seleccionar un lenguaje si pasa el ratón por encima; 
// no obstante, en ese caso al proyecto/s no se podrá acceder 
let filterLockedByClick = false;

skillItems.forEach(item => {
    const skillName = item.querySelector('.skills-scroll-name').textContent.trim();

    // Se está pendiente de si el usuario a clickado sobre un lenguaje
    // En ese caso bloqueará los "hover" y mostrará los proyectos donde se empleó el lenguaje
    // Para ello, comparará el contenido del texto del item de la lista de lenguajes 
    // con el contenido del "card-skill"
    item.addEventListener('click', () => {
        const clickedSkill = skillName;

        activeSkill = clickedSkill;
        filterLockedByClick = true;

        projectCards.forEach(card => {
            const skillsInCard = Array.from(card.querySelectorAll('.card-skill')).map(skill => skill.textContent.trim());
            if (skillsInCard.includes(clickedSkill)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        // esperará 300 milisegundos a que se haga la selección de los proyectos
        // y situará aquellos relacionados arriba del contenedor padre de la lista
        setTimeout(() => {
            const firstVisible = document.querySelector('.project-card:not(.hidden)');
            if (firstVisible) {
                firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    });

    // mostrará los proyectos relacionados con el lenguaje por el que se haya pasado por encima el cursor
    item.addEventListener('mouseenter', () => {
        if (filterLockedByClick) return;

        projectCards.forEach(card => {
            const cardSkills = Array.from(card.querySelectorAll('.card-skill')).map(skill => skill.textContent.trim());
            if (cardSkills.includes(skillName)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        setTimeout(() => {
            const firstVisible = document.querySelector('.project-card:not(.hidden)');
            if (firstVisible) {
                firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    });

    // cuando el usuario deje de pasar el cursor por encima del item del lenguaje,
    // le eliminará el estilo "hidden" al elemento seleccionado
    item.addEventListener('mouseleave', () => {
        if (!activeSkill) {
            projectCards.forEach(card => card.classList.remove('hidden'));
        }
        filterLockedByClick = false;
    });
});

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


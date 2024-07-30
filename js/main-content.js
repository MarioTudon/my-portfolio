document.addEventListener('DOMContentLoaded', () => {
    let concealablesElements = document.getElementsByClassName('main-concealable');
    let marioButton = document.getElementById('mario-button');
    let marioSection = document.getElementById('mario');
    let aboutMeButton = document.getElementById('about-me-button');
    let aboutMeSection = document.getElementById('about-me');
    let projectsButton = document.getElementById('projects-button');
    let projectsSection = document.getElementById('projects');
    let skillsButton = document.getElementById('skills-button');
    let skillsSection = document.getElementById('skills');
    let careerButton = document.getElementById('career-button');
    let careerSection = document.getElementById('career');

    (() => {
        for (const item of concealablesElements) {
            item.classList.add('hide');
        }
        marioSection.classList.remove('hide');
    })();

    marioButton.addEventListener('click', () => {
        for (const item of concealablesElements) {
            item.classList.add('hide');
        }
        marioSection.classList.remove('hide');
    });
    aboutMeButton.addEventListener('click', () => {
        for (const item of concealablesElements) {
            item.classList.add('hide');
        }
        aboutMeSection.classList.remove('hide');
    });
    projectsButton.addEventListener('click', () => {
        for (const item of concealablesElements) {
            item.classList.add('hide');
        }
        projectsSection.classList.remove('hide');
    });
    skillsButton.addEventListener('click', () => {
        for (const item of concealablesElements) {
            item.classList.add('hide');
        }
        skillsSection.classList.remove('hide');
    });
    careerButton.addEventListener('click', () => {
        for (const item of concealablesElements) {
            item.classList.add('hide');
        }
        careerSection.classList.remove('hide');
    });
});
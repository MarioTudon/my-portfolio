document.addEventListener('DOMContentLoaded', () => {
    let educationActive = false;
    let workActive = false;
    let educationCareer = document.getElementById('education-career');
    let workCareer = document.getElementById('work-career');
    let educationButton = document.getElementById('education-button');
    let workButton = document.getElementById('work-button');

    (() => {
        educationCareer.classList.add('hide');
        workCareer.classList.add('hide');
    })();

    educationButton.addEventListener('click', () => {
        if (!educationActive) {
            educationCareer.classList.remove('hide');
            workCareer.classList.add('hide');
        }
        else {
            educationCareer.classList.add('hide');
            workCareer.classList.add('hide');
        }
        educationActive = !educationActive;
        workActive = false;
    });
    workButton.addEventListener('click', () => {
        if (!workActive) {
            educationCareer.classList.add('hide');
            workCareer.classList.remove('hide');
        }
        else {
            educationCareer.classList.add('hide');
            workCareer.classList.add('hide');
        }
        workActive = !workActive;
        educationActive = false;
    });
});

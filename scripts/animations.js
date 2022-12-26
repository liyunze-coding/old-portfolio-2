const scroll_observer = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show-slide');
        } else {
            entry.target.classList.remove('show-slide');
        }
    })
})

const fade_observer = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show-fade');
        } else {
            entry.target.classList.remove('show-fade');
        }
    })
})

const projectIconObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.play();
        } else {
            entry.target.pause();
        }
    })
})

$(window).on("load", async function () {
    const hiddenScrolls = document.querySelectorAll('.hidden-slide');
    const hiddenFades = document.querySelectorAll('.hidden-fade');
    const projectPlay = document.querySelectorAll('#project-icon');

    hiddenScrolls.forEach((el) => scroll_observer.observe(el));
    hiddenFades.forEach((el) => fade_observer.observe(el));
    projectPlay.forEach((el) => projectIconObserver.observe(el));
});
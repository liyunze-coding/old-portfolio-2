const scroll_observer = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show-slide')
        } else {
            entry.target.classList.remove('show-slide')
        }
    })
})

const fade_observer = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show-fade');
        } else {
            entry.target.classList.remove('show-fade')
        }
    })
})

const hiddenScrolls = document.querySelectorAll('.hidden-slide');
const hiddenFades = document.querySelectorAll('.hidden-fade');

hiddenScrolls.forEach((el) => scroll_observer.observe(el));
hiddenFades.forEach((el) => fade_observer.observe(el));

function scrolltoTop() {
    window.scrollTo(0, 0);
    return false;
}

$(window).on("load", async function () {
    let date = new Date();
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let age = year - 2004;

    if (month < 11 || day < 28) {
        age--;
    }

    document.getElementById("age").innerText = age;

    document.getElementById("today").innerText = weekday[date.getDay()];

    consoleText(
        [
            " great",
            "n awesome",
            " splendid",
            "n interesting",
            " marvelous",
            " memorable",
            " wonderful",
        ],
        "day-adjective"
    );
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
    let videos = document.getElementsByClassName("project-icon");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
        videos[i].autoplay = false;
        videos[i].load();
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.opacity = "1";
    videos[slideIndex-1].autoplay = true;
    
	dots[slideIndex-1].className += " active";
}

document.querySelectorAll('.project-icon').forEach((video) => {
    video.addEventListener('click', function (event) {
        if (this.paused){
            this.play(); 
        } else {
            this.pause();
        }
    });
 });

console.log(`
_____                   _____       _   _
|  __ \\                 |  __ \\     | | | |
| |__) |   _  __ _ _ __ | |__) |   _| |_| |__   ___  _ __
|  _  / | | |/ _\` | '_ \\|  ___/ | | | __| '_ \\ / _ \\| '_ \\
| | \\ \\ |_| | (_| | | | | |   | |_| | |_| | | | (_) | | | |
|_|  \\_\\__, |\\__,_|_| |_|_|    \\__, |\\__|_| |_|\\___/|_| |_|
        __/ |                   __/ |
       |___/                   |___/
`);
console.log(`Check out https://www.twitch.tv/RyanPython :>`)

// (un)muting project videos
var vids_muted = true;

function videos_unmuted() {
    let button = document.getElementById("mute-button");
    button.innerText = vids_muted
        ? "Click to mute audio"
        : "Click to play audio";
    // button.style.backgroundColor = vids_muted ? '#dc0000' : '#00bf2d';
    vids_muted = !vids_muted;

    let all_videos = document.getElementsByTagName("video");

    for (v of all_videos) {
        v.muted = !v.muted;
    }
}

function consoleText(words, id) {
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:white");
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(
                0,
                letterCount
            );
            window.setTimeout(function () {
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute(
                    "style",
                    "color:white"
                );
                letterCount += x;
                waiting = false;
            }, 800);
        } else if (
            letterCount === words[0].length + 1 &&
            waiting === false
        ) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 3000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(
                0,
                letterCount
            );
            letterCount += x;
        }
    }, 120);
    window.setInterval(function () {
        if (visible === true) {
            con.className = "console-underscore hidden";
            visible = false;
        } else {
            con.className = "console-underscore";

            visible = true;
        }
    }, 400);
}
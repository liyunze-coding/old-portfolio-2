$(window).on("load", async function () {
    let date = new Date();
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let year = date.getFullYear();
    let age = year - 2004;

    let birthdate = new Date(`${year}-11-28`);

    if (birthdate > date) {
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
            "n incredible",
            " memorable",
            " wonderful",
            " supercalifragilisticexpialidocious"
        ],
        "day-adjective"
    );
});

let slideIndex = 0;
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
    const video_description = [
        [
            'aim_lab_demo.mov', 
            `Aim Lab bot that takes over your mouse to
            play Aim Lab. Uses <b>OpenCV</b> for screen
            image processing and <b>win32API</b> for
            mouse control.`
        ], 
        [
            'chess_opencv_demo.mov',
            `Chess bot that plays the best moves on
            lichess according to <b>Stockfish</b> engine.
            Uses <b>OpenCV</b> for screen image
            processing and <b>PyAutoGUI</b> for mouse
            control. <br /><a
                href="https://github.com/liyunze-coding/chess-playing-bot-v2"
                class="github-repo"
                target="_blank"
                >Github</a
            >`
        ], 
        [
            'chimp_test.mov',
            `A Chimp Test bot that plays Chimp Test on
            Human Benchmark with incredible speed. Uses
            <b>OpenCV</b> for screen image processing and
            <b>PyAutoGUI</b> for mouse control. <br /><a
                href="https://github.com/liyunze-coding/human-benchmark-bots/tree/master/chimp_test"
                class="github-repo"
                target="_blank"
                >Github</a
            >`
        ], 
        [
            'visual_memory_clip.mov',
            `Visual Memory bot that plays Human
            Benchmark's Visual Memory Test. Uses OpenCV
            for screen image processing and PyAutoGUI for
            mouse control.
            <br /><a
                href="https://github.com/liyunze-coding/human-benchmark-bots/tree/master/visual_memory"
                class="github-repo"
                target="_blank"
                >Github</a
            >`
        ], 
        [
            'monkeytype.mov',
            `A MonkeyType bot that types at a whopping
            620+ WPM using <b>OpenCV</b> for screen image
            processing, <b>Tesseract OCR engine</b> to
            identify words and <b>PyAutoGUI</b> for
            keyboard control. <br /><a
                href="https://github.com/liyunze-coding/monkey-type-bot"
                class="github-repo"
                target="_blank"
                >Github</a
            >`
        ]
    ];
	let i;
	let dots = document.getElementsByClassName("dot");

	if (n > video_description.length-1) {slideIndex = 0}
	if (n < 0) {slideIndex = video_description.length-1}

    let video = video_description[slideIndex][0];
    let description = video_description[slideIndex][1];
    
    let video_elem = document.getElementById('project-icon');
    document.getElementById('video-source').setAttribute('src', `./videos/${video}`);

    video_elem.load();
    document.getElementById('project-description').innerHTML = description;

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
    
	dots[slideIndex].className += " active";
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


$(window).on("load", async function () {
    let date = new Date();
    let weekday = ["日","一","二","三","四","五","六"];
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
            "非常好",
            "还不错",
            "蛮晴朗的",
            "特别好",
            "挺良好的",
            "极好的"
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
            `Aim Lab bot 接管您的鼠标来玩 Aim Lab。使用
            OpenCV 进行屏幕图像处理，使用 win32API
            进行鼠标控制。`
        ], 
        [
            'chess_opencv_demo.mov',
            `根据Stockfish引擎来在 lichess 国际象棋游戏
            上发挥最佳动作。使用OpenCV进行屏幕图像处理，使用
            PyAutoGUI进行鼠标控制。 <br /><a
                href="https://github.com/liyunze-coding/chess-playing-bot-v2"
                class="github-repo"
                target="_blank"
                >Github</a
            >`
        ], 
        [
            'chimp_test.mov',
            `Chimp Test 机器人，它以惊人的速度在 Human
            Benchmark 上完成 Chimp
            Test。使用OpenCV进行屏幕图像处理，使用
            PyAutoGUI 进行鼠标控制。<br /><a
                href="https://github.com/liyunze-coding/human-benchmark-bots/tree/master/chimp_test"
                class="github-repo"
                target="_blank"
                >Github</a
            >`
        ], 
        [
            'visual_memory_clip.mov',
            `Human Benchmark 的 Visual Memory Test
            的视觉记忆机器人。使用 OpenCV
            进行屏幕图像处理，使用 PyAutoGUI
            进行鼠标控制。
            <br /><a
                href="https://github.com/liyunze-coding/human-benchmark-bots/tree/master/visual_memory"
                class="github-repo"
                target="_blank"
                >Github</a
            >`
        ],
        [
            'monkeytype.mov',
            `高达 620+ WPM 打字的 MonkeyType
            机器人，使用OpenCV进行屏幕图像处理，使用Tesseract
            OCR 引擎识别单词，使用PyAutoGUI进行键盘控制。
            <br /><a
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
    document.getElementById('video-source').setAttribute('src', `./../videos/${video}`);

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
        ? "静音"
        : "播音";
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
            }, 1000);
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
    }, 400);
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
console.log(`点击 https://www.twitch.tv/RyanPython :>`)


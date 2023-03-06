const enhance = id => {
    const element = document.getElementById(id), text = element.innerText.split("");

    element.innerText = "";

    text.forEach((letter, index) => {
        const span = document.createElement("span");

        span.className = "letter";
        span.innerText = letter;

        element.appendChild(span);
    });
}

const enhancedIds = ["youtube", "twitter", "instagram", "discord", "github", "twitch"];
enhancedIds.forEach(id => enhance(id));

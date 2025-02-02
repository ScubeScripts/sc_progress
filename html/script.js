let progress = 0;
let progressInterval = null;

function setProgressBar(value) {
    document.getElementById("progress-bar").style.width = value + "%";
}

function updateProgress(timeMs, message) {
    let progressContainer = document.getElementById("progress-container");
    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");

    // Falls progressText nicht existiert → erstellen
    if (!progressText) {
        progressText = document.createElement("div");
        progressText.id = "progress-text";
        progressText.style.position = "absolute";
        progressText.style.width = "100%";
        progressText.style.textAlign = "center";
        progressText.style.top = "50%";
        progressText.style.transform = "translateY(-50%)";
        progressText.style.color = "#FFF";
        progressText.style.fontSize = "13px";
        progressText.style.fontFamily = "'Poppins', sans-serif";
        progressText.style.fontWeight = "600";
        progressText.style.zIndex = "2";
        progressContainer.appendChild(progressText);
    }

    progress = 0;
    setProgressBar(0);
    clearInterval(progressInterval);

    progressContainer.style.display = "flex";

    let startTime = Date.now();
    progressInterval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        progress = (elapsed / timeMs) * 100;
        setProgressBar(progress);
        progressText.innerText = `${message} ${Math.round(progress)}%`;

        if (elapsed >= timeMs) {
            clearInterval(progressInterval);
            progressContainer.style.display = "none";
        }
    }, 50);
}

window.addEventListener("message", function(event) {
    if (event.data.type === "showProgress") {
        updateProgress(event.data.time, event.data.message);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("progress-container").style.display = "none";
});

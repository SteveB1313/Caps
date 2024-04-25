async function start() {
    chrome.tabCapture.capture({audio: true}, (stream) => {
        const output = new AudioContext();
        const source = output.createMediaStreamSource(stream);
        source.connect(output.destination);
    })
}
const startButton = document.getElementById("start");
startButton.addEventListener('click', start());
const Tesseract = require('tesseract.js');

window.addEventListener("message", (event) => {
    const url = event.data;

    Tesseract.recognize(
        url,
        "eng",
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        document.getElementById("text").innerText = text;
    })

});
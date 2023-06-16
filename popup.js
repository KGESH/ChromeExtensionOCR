document.getElementById("submit").onclick = async () => {
    const url = document.getElementById("url").value;
    const res = await fetch(url);
    const blob = await res.blob();

    iframe.contentWindow.postMessage(blob, "*");
}


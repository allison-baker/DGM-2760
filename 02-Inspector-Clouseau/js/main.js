document.querySelector("#title").innerHTML = "Inspector Clouseau";

let windowSize = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`;
let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`;

let myWindow = document.querySelector("#myWindow");
myWindow.innerHTML = windowSize + '\n' + offset;

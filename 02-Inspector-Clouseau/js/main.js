document.querySelector('#title').innerText = 'Inspector Clouseau';
document.querySelector('#subtitle').innerText = 'This is Chief Inspector Clouseau on the pheaun'

function reDisplay() {
  let windowSize = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`;
  let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`;
  let url = `The URL for this page is ${window.location}.`;
 
  let myWindow = document.querySelector("#myWindow");
  myWindow.innerText = `${windowSize}\n${offset}\n${url}`;

  let docTitle = `Document title is ${document.title}.`;
  let modified = `This document was last updated on ${document.lastModified}.`;

  let myDoc = document.querySelector('#myDoc');
  myDoc.innerText = `${docTitle}\n${modified}`;
}

reDisplay();
// Extension command listener
chrome.commands.onCommand.addListener(function(hotkey) {

  state = (window.localStorage.getItem("state") == "true");

  switch(hotkey) {

    case "doze":
      if (state) window.postMessage("updateState", "*");
      break;
    case "awake":
      if (!state) window.postMessage("updateState", "*");
      break;
    case "help":
      chrome.tabs.create({
        url: chrome.extension.getURL('help/readme.html')
      });
      break;
    case "addToAnnota":
      chrome.tabs.executeScript({
        file: "overlay/overlay-creation.js"
      });
      break;
    default:
      break;

  }

});

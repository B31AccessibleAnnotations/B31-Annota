// Extension command listener
chrome.commands.onCommand.addListener(function(hotkey) {

  switch(hotkey) {

    case "doze":
      if (window.state) window.postMessage("updateState", "*");
      break;
    case "awake":
      if (!window.state) window.postMessage("updateState", "*");
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

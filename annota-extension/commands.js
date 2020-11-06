// Extension command listener
chrome.commands.onCommand.addListener(function(command) {

  switch(command) {

    case "doze":
      if (state) window.postMessage("updateState", "*");
      break;
    case "awake":
      if (!state) window.postMessage("updateState", "*");
      break;
    case "help":
      /* ------------TODO: ADD HELP PAGE------------*/
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

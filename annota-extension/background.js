var command;

// Runs when the extension is installed
chrome.runtime.onInstalled.addListener(function() {

  // Enable/Disable state of the extension
  window.localStorage.setItem("state", JSON.stringify(true));

  // Command icon for Mac/Windows
  if (window.navigator.userAgent.indexOf("Mac") != -1) {
    command = "Alt";
  } else {
    command = "Alt+Shift";
  }

  window.localStorage.setItem("command", command);

  // Inits context menu items
  window.postMessage("contextMenuInit", "*");

  // Adds content menu onClick listeners
  window.postMessage("addContextListener", "*");

});

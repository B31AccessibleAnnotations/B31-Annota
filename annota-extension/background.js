var command;

// Runs when the extension is installed
chrome.runtime.onInstalled.addListener(function() {

  // Enable/Disable state of the extension
  chrome.storage.sync.set({state: true});

  // Command icon for Mac/Windows
  if (window.navigator.userAgent.indexOf("Mac") != -1) {
    command = "⌘";
  } else {
    command = "Ctrl";
  }

  chrome.storage.sync.set({command: command});

  // Inits context menu items
  window.postMessage("contextMenuInit", "*");

});

// Adds content menu onClick listeners
window.postMessage("addContextListener", "*");

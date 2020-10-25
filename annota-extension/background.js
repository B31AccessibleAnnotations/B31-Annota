var state = true;

// Command icon for Mac/Windows
var command;

if (window.navigator.userAgent.indexOf("Mac") != -1) {
  command = "⌘";
} else {
  command = "Ctrl";
}

// Runs when the extension is installed
chrome.runtime.onInstalled.addListener(function() {

  // Extention Menu Options
  chrome.contextMenus.create({
    "id": "toggleState",
    "title": "Doze                                  " + command + "+D",
    "contexts": ["browser_action"]
  });

  chrome.contextMenus.create({
    "id": "help",
    "title": "Help                                   " + command + "+H",
    "contexts": ["browser_action"]
  });

  chrome.contextMenus.create({
    "id": "sep",
    "title": "sep",
    "type": "separator",
    "contexts": ["browser_action"]
  });

  chrome.contextMenus.create({
    "id": "addAnnota",
    "title": "Add to Annota                   " + command + "+\\",
    "contexts": ["browser_action"]
  });

  chrome.contextMenus.create({
    "id": "sep2",
    "title": "sep2",
    "type": "separator",
    "contexts": ["browser_action"]
  });

  // Right-click context menu options
  chrome.contextMenus.create({
    "id": "annotate",
    "title": "Annotate",
    "contexts": ["selection"]
  });

});

// Extention Menu Listener
chrome.contextMenus.onClicked.addListener(function(info) {

  // Disable or Enable extension
  if (info.menuItemId == "toggleState") {

    state = !state;

    if (state) {

      // Enable extension
      chrome.browserAction.enable();

      // Update item
      chrome.contextMenus.update("toggleState",
      {
        "title": "Doze                                  " + command + "+D",
      });

      // Enable extension items
      chrome.contextMenus.update("help", {"visible": true});
      chrome.contextMenus.update("sep", {"type": "separator", "visible": true});
      chrome.contextMenus.update("addAnnota", {"visible": true});
      chrome.contextMenus.update("sep2", {"type": "separator", "visible": true});
      chrome.contextMenus.update("annotate", {"visible": true});

    } else {

      // Disable extension
      chrome.browserAction.disable();

      // Update item
      chrome.contextMenus.update("toggleState",
      {
        "title": "Awake                                  " + command + "+Shift+A"
      });

      // Disable extension items
      chrome.contextMenus.update("help", {"visible": false});
      chrome.contextMenus.update("sep", {"type": "normal", "visible": false});
      chrome.contextMenus.update("addAnnota", {"visible": false});
      chrome.contextMenus.update("sep2", {"type": "normal", "visible": false});
      chrome.contextMenus.update("annotate", {"visible": false});

    }

  }

});

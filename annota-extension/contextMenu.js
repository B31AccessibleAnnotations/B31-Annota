
// Communication listener
window.addEventListener("message", contextMenuListener, false);

// Update state listener
window.addEventListener("message", updateState, false);

// Communication listener function
function contextMenuListener(event) {

  if (event.data == "contextMenuInit") {
    initMenus();
  } else if (event.data == "addContextListener") {
    addContextListener();
  }

}

function initMenus() {

  // Extention Menu Options
  chrome.contextMenus.create({
    "id": "toggleState",
    "title": "Doze                                   " + command + "+Shift+D",
    "contexts": ["browser_action"]
  });

  chrome.contextMenus.create({
    "id": "help",
    "title": "Help                                    " + command + "+Shift+H",
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
    "title": "Annotate                             " + command + "+Shift+Q",
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

}

// Context menu listener
function addContextListener() {

  // Extention Menu Listener
  chrome.contextMenus.onClicked.addListener(function(info) {

    // Disable or Enable extension
    if (info.menuItemId == "toggleState") {
      window.postMessage("updateState", "*");
    }

    if (info.menuItemId == "annotate") {
      chrome.tabs.executeScript({
        file: "overlay/overlay-creation.js"
      });
    }

    if (info.menuItemId == "help") {
      chrome.tabs.create({
        url: chrome.extension.getURL('help/readme.html')
      });
    }

  });

}

function updateState(event) {

  if (event.data == "updateState") {

    // Get state of extension from storage
    state = !state;

    if (state) {

      // Enable extension
      chrome.browserAction.enable();

      // Update item
      chrome.contextMenus.update("toggleState",
      {
        "title": "Doze                                   " + command + "+Shift+D"
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
        "title": "Awake                                  " + command + "+A"
      });

      // Disable extension items
      chrome.contextMenus.update("help", {"visible": false});
      chrome.contextMenus.update("sep", {"type": "normal", "visible": false});
      chrome.contextMenus.update("addAnnota", {"visible": false});
      chrome.contextMenus.update("sep2", {"type": "normal", "visible": false});
      chrome.contextMenus.update("annotate", {"visible": false});

    }

  }

}

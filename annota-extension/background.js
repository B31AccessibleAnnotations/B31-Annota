// Runs when the extension is installed
chrome.runtime.onInstalled.addListener(function() {

  // Command icon for Mac/Windows
  var command;

  if (window.navigator.userAgent.indexOf("Mac") != -1) {
    command = "⌘";
  } else {
    command = "Ctrl";
  }

  // Extention Menu Options
  chrome.contextMenus.create({
    "id": "awake",
    "title": "Awake                                  " + command + "+Shft+A",
    "contexts": ["browser_action"],
  });

  chrome.contextMenus.create({
    "id": "doze",
    "title": "Dozing                                 " + command + "+D",
    "contexts": ["browser_action"],
  });

  chrome.contextMenus.create({
    "id": "newTab",
    "title": "Launch App New Tab           " + command + "+'",
    "contexts": ["browser_action"],
  });

  chrome.contextMenus.create({
    "id": "sep",
    "type": "separator",
    "contexts": ["browser_action"],
  });

  chrome.contextMenus.create({
    "id": "addAnnota",
    "title": "Add to Annota                     " + command + "+\\",
    "contexts": ["browser_action"],
  });

  chrome.contextMenus.create({
    "id": "sep2",
    "type": "separator",
    "contexts": ["browser_action"],
  });

  // Right-click context menu options
  chrome.contextMenus.create({
    "id": "3",
    "title": "Annotate",
    "contexts": ["selection"],
  });

});

// Extention Menu Listener
chrome.contextMenus.onClicked.addListener(function(info) {

  if (info.menuItemId == "NewTab") {
    chrome.tabs.create({"url":"chrome://newtab"});
  }

});

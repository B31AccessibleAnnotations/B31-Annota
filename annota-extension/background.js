// Runs when the extension is installed
chrome.runtime.onInstalled.addListener(function() {

  // Extention Menu Options
  chrome.contextMenus.create({
    "id": "1",
    "title": "Open Annota in New Tab               Ctrl+N",
    "contexts": ["browser_action"],
  });

  chrome.contextMenus.create({
    "id": "2",
    "title": "test",
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

  if (info.menuItemId == "1") {
    chrome.tabs.create({"url":"chrome://newtab"});
  }

});

// Create overlay for HTML page
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
var selectionText;
var parentURL;
var nameText;

if (!location.ancestorOrigins.contains(extensionOrigin)) {

    //createCitation();

    // Grab text if any was selected
    selectionText = getSelectionText();
    selectionText = selectionText.replaceAll('"', "");
    selectionText = selectionText.replaceAll("'", "");

    // Grab parent URL
    parentURL = window.location.href;

    nameText = selectionText + "[URLOFPARENT]" + parentURL;

    // Insert iFrame
    document.body.insertAdjacentHTML("afterend", "<iframe id='overlay' name='" + nameText + "' src=" + chrome.runtime.getURL("overlay/overlay.html") + " style='position:absolute;top:" + document.documentElement.scrollTop + "px;left:0px;width:100%;height:100%;z-index:9999' frameborder='no'><iframe>");

    // Disable scrolling
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

function getSelectionText() {
  return window.getSelection().toString();
}

function createCitation() {
  console.log(document.getElementsByName("author")[0]);

  console.log(document.getElementsByName("date")[0]);

}

// Create listener to remove iFrame once done
function receiveMessage(event){

   if (event.data=="remove"){

      var element = document.getElementById('overlay');

      // Remove iFrame
      element.parentNode.removeChild(element);

      // Enable scrolling
      document.getElementsByTagName('body')[0].style.overflow = "visible";

      // Remove listener
      window.removeEventListener("message", receiveMessage);
   }

}

// Add listener to parent window
window.addEventListener("message", receiveMessage, false);

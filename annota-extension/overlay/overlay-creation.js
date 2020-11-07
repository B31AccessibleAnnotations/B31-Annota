// Create overlay for HTML page
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {

    // Insert iFrame
    document.body.insertAdjacentHTML("afterend", "<iframe id='overlay' src=" + chrome.runtime.getURL("overlay/overlay.html") + " style='position:absolute;top:" + document.documentElement.scrollTop + "px;left:0px;width:100%;height:100%;z-index:9999' frameborder='no'><iframe>");

    // Disable scrolling
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

// Create listener to remove iFrame once done
function receiveMessage(event){

   if (event.data=="remove"){

      // Remove iFrame
      var element = document.getElementById('overlay');
      element.parentNode.removeChild(element);

      // Enable scrolling
      document.getElementsByTagName('body')[0].style.overflow = "visible";

      // Remove listener
      window.removeEventListener("message", receiveMessage);
   }

}

// Add listener to parent window
window.addEventListener("message", receiveMessage, false);

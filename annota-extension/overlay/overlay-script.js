var modal;
var span;
var initialText;
var selectionText;

// Wait for page to load
window.onload = function() {

  // Get the modal
  modal = document.getElementById("myModal");

  // Modify editor text
  initialText = document.getElementsByClassName("ql-editor")[0];
  initialText.innerHTML = "<p>" + window.name + "</p>";

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    // This is how you get tags - string seperated by ','
    console.log(document.getElementById('tags').getAttribute('data-simple-tags'));
    modal.style.display = "none";
    parent.window.postMessage("remove", "*");
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      // This is how you get tags - seperated by ','
      console.log(document.getElementById('tags').getAttribute('data-simple-tags'));
      modal.style.display = "none";
      parent.window.postMessage("remove", "*");
    }
  }

}

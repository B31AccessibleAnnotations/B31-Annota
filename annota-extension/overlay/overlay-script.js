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
  initialText.innerHTML = "<p>" + window.name.split("[URLOFPARENT]")[0] + "</p>";

  // Add domain URL to reference
  document.getElementById("references").innerHTML = window.name.split("[URLOFPARENT]")[1];

  const element = document.querySelector('.choices');
  const choices = new Choices(element, {

    searchPlaceholderValue: "Search for a document...",
    choices: [
      {
        value: 'Option 1',
        label: 'Option 1',

      },
      {
      value: 'Option 2',
      label: 'Option 2',
      }
    ]

  });

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    // This is how you get tags - string seperated by ','
    // document.getElementById('tags').getAttribute('data-simple-tags');
    modal.style.display = "none";
    parent.window.postMessage("remove", "*");
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      // This is how you get tags - seperated by ','
      // document.getElementById('tags').getAttribute('data-simple-tags');
      modal.style.display = "none";
      parent.window.postMessage("remove", "*");
    }
  }

}

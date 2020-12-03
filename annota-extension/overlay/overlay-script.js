var modal;
var span;
var initialText;
var selectionText;

// Wait for page to load
window.onload = function() {

  // Get the modal
  modal = document.getElementById("myModal");

  // Modify editor text
  initialText = document.getElementsByClassName("ql-editor")[1];
  initialText.innerHTML = "<p>" + window.name.split("[URLOFPARENT]")[0] + "</p>";

  // Add domain URL to reference
  document.getElementById("references").innerHTML = window.name.split("[URLOFPARENT]")[1];

  const element = document.querySelector('.choices');
  const choices = new Choices(element, {

    placeholder: true,
    searchPlaceholderValue: "Search for a document...",
    choices: [
      {
        value: "Select your connection",
        label: "Select your connection",
        placeholder: true,
        selected: true,
      },
      {
        label: "PDF",
        id: 1,
        choices: [
          {
            value: 'CodingAssignment.pdf',
            label: 'CodingAssignment.pdf',
          },
          {
            value: 'how to win design day.pdf',
            label: 'how to win design day.pdf',
          },
        ],
      },
      {
        label: "Word Documents",
        id: 2,
        choices: [
          {
            value: 'Book of Thieves.docx',
            label: 'Book of Thieves.docx',
          },
          {
            value: 'Thesis.docx',
            label: 'Thesis.docx',
          },
        ],
      },
      {
        label: "Webpages",
        id: 3,
        choices:[
          {
            value: 'reddit.com/how-to-pass-GNG2101',
            label: 'reddit.com/how-to-pass-GNG2101',
          },
          {
            value: 'https://www.justice.gc.ca/eng/csj-sjc/pl/charter-charte/c81',
            label: 'https://www.justice.gc.ca/eng/csj-sjc/pl/charter-charte/c81',
          },
        ],
      },
      {
        label: "Images",
        id: 4,
        choices: [
          {
            value: 'lots of cats.png',
            label: 'lots of cats.png',
          },
        ],
      },
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

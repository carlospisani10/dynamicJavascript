//Get references to the tbody element and the adding field inputs and submit button.
var cityAdd = document.querySelector("#cityrecord");
var stateAdd = document.querySelector("#staterecord");
var dateAdd = document.querySelector("#daterecord");
var countryAdd = document.querySelector("#countryrecord");
var shapeAdd = document.querySelector("#shaperecord");
var durationAdd = document.querySelector("#durationrecord");
var descriptionAdd = document.querySelector("#descriptionrecord");
var $submitBtn = document.querySelector("#submit");

// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $searchBtn = document.querySelector("#search");


// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// When the submit button is clicked, call the handleSubmitClick function
$submitBtn.addEventListener("click", handleSubmitClick);


// Set filteredAliens to alienData initially
var filteredAliens = alienData;

// renderTable renders the filteredAliens to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredAliens.length; i++) {
      // Get get the current aliensObject object and its fields
      var aliensObject = filteredAliens[i];
      var info = Object.keys(aliensObject);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < info.length; j++) {
        // For every field in the aliensObject object, create a new cell at set its inner text to be the current value at the current aliensObject' info
        var alien = info[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = aliensObject[alien];
      }
    }
  }
  
  function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var searchState = $stateInput.value.trim().toLowerCase();
    var searchCity = $cityInput.value.trim().toLowerCase();
//$cityinput.value = '', etc


    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredAliens = alienData.filter(function(x) {
      var alienState = x.state.toLowerCase();
      var alienCity = x.city.toLowerCase();
    
    //filteredCity = alienState.filter(function(y) {
      //var alienCity = y.city.toLowerCase();
    //})
      return (searchState === alienState) || (searchCity === alienCity);

   });
    renderTable();
  }


// Trigger event handler when the Submit button is clicked
    function handleSubmitClick(event) {
    // The default behavior of a button clicked inside of a form is to try and submit the form somewhere (which we don't want)
    event.preventDefault();
    var alienRecord = {
        "datetime" : dateAdd.value.trim().toLowerCase(),
        "city" : cityAdd.value.trim().toLowerCase(),
        "state" : stateAdd.value.trim().toLowerCase(),
        "country" : countryAdd.value.trim().toLowerCase(),
        "shape:" : shapeAdd.value.trim().toLowerCase(),
        "duration" : durationAdd.value.trim().toLowerCase(),
        "description" : descriptionAdd.value.trim().toLowerCase()
    };
    alienData.push(alienRecord);
    renderTable();
    //var alienValue = Object.values(alienRecord)
    //var $row = $tbody.insertRow;
    //for (var i = 0; i < alienValue.length; i++) {
        //var $cell = $row.insertCell(i);
        //$cell.innerText = alienValue[i];
    //}
}   

//Pagination!

  // Render the table for the first time on page load
  renderTable();

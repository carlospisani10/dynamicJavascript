
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

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
  
  // Render the table for the first time on page load
  renderTable();
  
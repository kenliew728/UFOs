// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

var filters = {};
  

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.

    let date = d3.select("#datetime");
    //console.log(date);
    let city = d3.select("#city");
    //console.log(city);
    let state = d3.select("#state");
    //console.log(state);
    let country = d3.select("#country");
    //console.log(country);
    let shape = d3.select("#shape");
    //console.log(shape);

// 4b. Save the value that was changed as a variable.

    let dateValue = date.property("value");
    console.log(dateValue);
    let cityValue = city.property("value");
    console.log(cityValue);
    let stateValue = state.property("value");
    console.log(stateValue)
    let countryValue = country.property("value");
    console.log(countryValue);
    let shapeValue = shape.property("value");
    console.log(shapeValue);
  
    // 4c. Save the id of the filter that was changed as a variable.

    let dateId = date.attr("id");
    console.log(dateId);
    let cityId = city.attr("id");
    console.log(cityId);
    let stateId = state.attr("id");
    console.log(stateId);
    let countryId = country.attr("id");
    console.log(countryId);
    let shapeId = shape.attr("id");
    console.log(shapeId);
    
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    if (dateValue) {
      filters[dateId] = dateValue;
    }
    else {
      delete filters[dateId];
    }
    if (cityValue) {
      filters[cityId] = cityValue;
    }
    else {
      delete filters[cityId];
    }
    if (stateValue) {
      filters[stateId] = stateValue;
    }
    else {
      delete filters[stateId];
    }
    if (countryValue) {
      filters[countryId] = countryValue;
    }
    else {
      delete filters[countryId];
    }
    if (shapeValue) {
      filters[shapeId] = shapeValue;
    }
    else {
      delete filters[shapeId];
    }
   
    // 6. Call function to apply all filters and rebuild the table
     filterTable();
  }
   
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filterData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
    for (const [key, value] of Object.entries(filters)) {
      console.log(`${key}: ${value}`)

      filterData = filterData.filter(row => row[key] === value);
     }
       
     // 10. Finally, rebuild the table using the filtered data
   
    buildTable(filterData);
    }
      
  // 2. Attach an event to listen for changes to each filter

  d3.selectAll("#datetime").on("change", updateFilters);
  d3.selectAll("#city").on("change", updateFilters);
  d3.selectAll("#state").on("change", updateFilters);
  d3.selectAll("#country").on("change", updateFilters);
  d3.selectAll("#shape").on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
  
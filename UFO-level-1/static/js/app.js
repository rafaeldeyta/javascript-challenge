// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

tableData.forEach((blue) => {
    console.log(blue);
  
var row = tbody.append("tr")

   
    Object.entries(blue).forEach(([key, value]) => {
   
var cell = row.append("td")
cell.text(value);      
    
    });
  });

  var submit = d3.select("#filter-btn");

  submit.on("click", function() {
    d3.event.preventDefault();
      var inputDate = d3.select("#datetime");
      var inputValue = inputDate.property("value");
      var filteredData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);
      console.log(filteredData);
      tbody.html("");
      if(filteredData.length !== 0){
        filteredData.forEach((filteredUfoReport) => {
          var row = tbody.append("tr");
          Object.entries(filteredUfoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
          });
        });
      }
      else{
        console.log("Nothing");
        tbody.append("td").text("Information not available for this date!");
      }
  });
    
  
      

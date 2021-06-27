
var tableData = data;

 
d3.selectAll("button").on("click",function(){
  console.log(this)
});


function generateTable(table, data) {
    tableHtml= d3.select("tbody")
    tableHtml.html("")
    for (let element of data) {
         
      let row = table.insertRow();
      for (key in element) {
        
        let cell = row.insertCell();
        
        let text = document.createTextNode(element[key]);
        
        cell.appendChild(text);
      }
    }
  };
  
  let table = document.querySelector("tbody");
  generateTable(table, tableData);
 
 
function filterData(userInput){
    input=d3.select(userInput);
    inputValue=input.property("value");  
  return inputValue
}


filterButton=d3.select("#filter-btn");

 
filterButton.on("click",() => {
   
    filterTable=tableData.filter(item => (item.datetime === filterData("#datetime") || filterData("#datetime") === "") 
    && (item.city === filterData("#city") || filterData("#city") === "")
    && (item.state === filterData("#state") || filterData("#state") === "")
    && (item.country === filterData("#country") || filterData("#country") === "") 
    && (item.shape === filterData("#shape") || filterData("#shape") === ""));
    console.log("filterTable",filterTable);
    generateTable(table,filterTable);


});

 
resetButton=d3.select("#reset-btn")
resetButton.on("click",() => {
    generateTable(table,tableData)
     
    document.getElementById('datetime').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = ''
    document.getElementById('country').value = ''
    document.getElementById('shape').value = ''
});
var date = new Date();

var myGreeting = document.querySelector("h1");

function Greeting() {
    if (date.getHours() < 9) {
        myGreeting.innerHTML = "God Morgon, klockan är " + date.getHours() + ":" + date.getMinutes();
    }
    else if (date.getHours() >= 9 && date.getHours() <= 17) {
        myGreeting.innerHTML = "God Dag, klockan är " + date.getHours() + ":" + date.getMinutes();
    }
    else {
        myGreeting.innerHTML = "God Kväll, klockan är " + date.getHours() + ":" + date.getMinutes();
    }
}

var myParagraphList = document.querySelectorAll("p");
var i = 0;
var myString = "";
for (; i < myParagraphList.length -1; i++)
{
    myString = myString + " " + (i+1) + ". " + myParagraphList[i].innerHTML;
}
myParagraphList[i].innerHTML = myString;

var newh1 = document.createElement("h1");
var h1text = document.createTextNode("Detta element skapades med Javascript kod");
newh1.appendChild(h1text);

var content = document.getElementById("Content");
content.appendChild(newh1);

var tableRowCounter = 1;

/*
var table = document.createElement("table");
var tableheader = document.createElement("th")
var tablebody = document.createElement("tbody");
var tablerow = document.createElement("tr");
var tableData = document.createElement("td");
var tableDataText = document.createTextNode("Text 1");

table.appendChild(tableheader);
table.appendChild(tablebody);
tableData.appendChild(tableDataText)
tablerow.appendChild(tableData);
tablerow.appendChild(tableData);
tablebody.appendChild(tablerow);
tablebody.appendChild(tablerow);
table.setAttribute("border", "1");
content.appendChild(table);
*/

var table = document.querySelector("table");
var lastRow = table.rows[table.rows.length - 1];

var counter = 3;

function AddRow()
{
    var newTableRow = document.createElement("tr");
    var newTableData = document.createElement("td")
    var newTableDataText = document.createTextNode("Text" + counter);
    
    newTableData.appendChild(newTableDataText);
    newTableRow.appendChild(newTableData);
    table.appendChild(newTableRow);

    counter++;
}
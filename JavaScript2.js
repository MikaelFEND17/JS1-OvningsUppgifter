//debugger;

var contentDiv = document.getElementById("Content");

var fornamn = document.getElementById("fornamn");
var efternamn = document.getElementById("efternamn");

var namnSubmit = document.getElementById("NamnSubmit");
namnSubmit.addEventListener("click", function () { SkrivUtNamn(); });

function SkrivUtNamn()
{
    
    console.log(namnString);

    var nyH1 = document.createElement("h1");
    var namnString = "Du heter " + fornamn.value + " " + efternamn.value;
    var namnText = document.createTextNode(namnString);
    nyH1.appendChild(namnText);

    contentDiv.appendChild(nyH1);

    console.log(namnString);
}

var label = document.getElementById("labelText");


var changeTextButton = document.getElementById("ChangeText");
changeTextButton.addEventListener("click", function () { ChangeTextOnLabel(); });

function ChangeTextOnLabel()
{
    console.log(label.textContent);
   if (label.textContent === "Start Text")
   {
       label.textContent = "Nu har jag ändrat texten";
   } 
   else
   {
       label.textContent = "Start Text";
   }
}

var changeableDiv = document.getElementById("SizeChangingDiv");
changeableDiv.addEventListener("mouseover", function() { IncreaseDivSize(); } );
changeableDiv.addEventListener("mouseout", function() { DecreaseDivSize(); } );


function IncreaseDivSize()
{
    console.log("LOL");
    changeableDiv.style.width = "300px";
    changeableDiv.style.height = "300px";
}

function DecreaseDivSize()
{
    changeableDiv.style.width = "100px";
    changeableDiv.style.height = "100px";
}


var changeablePicture = document.getElementById("ChangeablePicture");

changeablePicture.addEventListener("click", function() { ChangePicture(); } )


function ChangePicture()
{
    console.log(changeablePicture.src.search("cross"));
    if (changeablePicture.src.search("cross") >= 0)
    {
        changeablePicture.src = changeablePicture.src.replace("cross", "circle");
    }
    else
    {
        changeablePicture.src = changeablePicture.src.replace("circle", "cross");
    }
}

function Calculator()
{
    
}

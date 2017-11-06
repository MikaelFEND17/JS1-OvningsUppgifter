//debugger;

var contentDiv = document.getElementById("Content");

var fornamn = document.getElementById("fornamn");
var efternamn = document.getElementById("efternamn");

var namnSubmit = document.getElementById("NamnSubmit");
namnSubmit.addEventListener("click", function () { SkrivUtNamn(); });

function SkrivUtNamn() {

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

function ChangeTextOnLabel() {
    console.log(label.textContent);
    if (label.textContent === "Start Text") {
        label.textContent = "Nu har jag ändrat texten";
    }
    else {
        label.textContent = "Start Text";
    }
}

var changeableDiv = document.getElementById("SizeChangingDiv");
changeableDiv.addEventListener("mouseover", function () { IncreaseDivSize(); });
changeableDiv.addEventListener("mouseout", function () { DecreaseDivSize(); });


function IncreaseDivSize() {
    console.log("LOL");
    changeableDiv.style.width = "300px";
    changeableDiv.style.height = "300px";
}

function DecreaseDivSize() {
    changeableDiv.style.width = "100px";
    changeableDiv.style.height = "100px";
}


var changeablePicture = document.getElementById("ChangeablePicture");

changeablePicture.addEventListener("click", function () { ChangePicture(); })


function ChangePicture() {
    console.log(changeablePicture.src.search("cross"));
    if (changeablePicture.src.search("cross") >= 0) {
        changeablePicture.src = changeablePicture.src.replace("cross", "circle");
    }
    else {
        changeablePicture.src = changeablePicture.src.replace("circle", "cross");
    }
}


//Calculator

var myCalculator = new Calculator();

var calcResult = document.getElementById("CalcResult");

var calcZero = document.getElementById("Calc0");
calcZero.addEventListener("click", function () { myCalculator.CalculatorAddNumber(0); });
var calcOne = document.getElementById("Calc1");
calcOne.addEventListener("click", function () { myCalculator.CalculatorAddNumber(1); });
var calcTwo = document.getElementById("Calc2");
calcTwo.addEventListener("click", function () { myCalculator.CalculatorAddNumber(2); });
var calcThree = document.getElementById("Calc3");
calcThree.addEventListener("click", function () { myCalculator.CalculatorAddNumber(3); });
var calcFour = document.getElementById("Calc4");
calcFour.addEventListener("click", function () { myCalculator.CalculatorAddNumber(4); });
var calcFive = document.getElementById("Calc5");
calcFive.addEventListener("click", function () { myCalculator.CalculatorAddNumber(5); });
var calcSix = document.getElementById("Calc6");
calcSix.addEventListener("click", function () { myCalculator.CalculatorAddNumber(6); });
var calcSeven = document.getElementById("Calc7");
calcSeven.addEventListener("click", function () { myCalculator.CalculatorAddNumber(7); });
var calcEight = document.getElementById("Calc8");
calcEight.addEventListener("click", function () { myCalculator.CalculatorAddNumber(8); });
var calcNine = document.getElementById("Calc9");
calcNine.addEventListener("click", function () { myCalculator.CalculatorAddNumber(9); });
var calcPlus = document.getElementById("CalcPlus");
calcPlus.addEventListener("click", function () { myCalculator.CalculatorAddOperand("Plus"); });
var calcSubtract = document.getElementById("CalcSubtract");
calcSubtract.addEventListener("click", function () { myCalculator.CalculatorAddOperand("Minus"); });
var calcMultiply = document.getElementById("CalcMultiply");
calcMultiply.addEventListener("click", function () { myCalculator.CalculatorAddOperand("Multiply"); });
var calcDivice = document.getElementById("CalcDivide");
calcDivice.addEventListener("click", function () { myCalculator.CalculatorAddOperand("Divide"); });
var calcEqual = document.getElementById("CalcEqual");
calcEqual.addEventListener("click", function () { myCalculator.CalculatorEqualPressed(); });
var calcEqual = document.getElementById("CalcClear");
calcEqual.addEventListener("click", function () { myCalculator.CalculatorClear(); });




function Calculator() {
    this.numString = "";
    this.numberArray = new Array();
    this.operand = "None";
    this.operandPressed = false;

    this.CalculatorAddNumber = function (aNumber) {
        this.numString = this.numString + aNumber;
        if (calcResult.value == 0) {
            calcResult.value = aNumber;
        }
        else {
            if (this.operandPressed == true) {
                calcResult.value = aNumber;
                this.operandPressed = false;
            }
            else {
                calcResult.value = calcResult.value + aNumber;
            }
        }

    }

    this.CalculatorAddOperand = function (operand) {
        if (this.numString.length > 0) {
            this.numberArray.push(parseFloat(this.numString));
            console.log(this.numberArray);
            this.numString = "";
            this.operand = operand;
            this.operandPressed = true;
        }
    }

    this.CalculatorEqualPressed = function () {
        this.numberArray.push(parseFloat(this.numString));
        console.log(this.numberArray);
        var result = 0;
        if (this.operand == "Plus") {
            result = this.numberArray[0] + this.numberArray[1];
        }
        else if (this.operand == "Subtract") {
            result = this.numberArray[0] - this.numberArray[1];
        }
        else if (this.operand == "Multiply") {
            result = this.numberArray[0] * this.numberArray[1];
        }
        else if (this.operand == "Divide") {
            if (this.numberArray[1] == 0) {
                alert("Cant divide by 0");
            }
            else {
                result = this.numberArray[0] / this.numberArray[1];
            }
        }

        this.numberArray.splice(0, this.numberArray.length);
        calcResult.value = result;

    }

    this.CalculatorClear = function () {
        this.dataArray = new Array();
        this.numString = "";
        calcResult.value = 0;
    }
}


//Tic-Tac-Toe
var ticTacToe = document.getElementById("TicTacToe");

ticTacToeGame = new TicTacToeGame(ticTacToe);
ticTacToeGame.Initialize();

console.log(ticTacToe.childNodes.length);

function TicTacToeGame(ticTacToe) {
    this.board = ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
    this.state = "Running";
    this.turn = "X";
    this.result = "No winner";
    this.ticTacToe = ticTacToe;
    this.gameOver = false;
    this.turnDiv = null; 

    this.Initialize = function()
    {
        for (let i = 0; i < 9; i++)
        {
            var newDiv = document.createElement("div");
            newDiv.id = i;            
            newDiv.classList.add("Empty");            
            newDiv.addEventListener("click", function () { ticTacToeGame.PlayerMoveOnSquare(this, i); });
            this.ticTacToe.appendChild(newDiv);
        }

        this.turnDiv = document.createElement("div");
        this.turnDiv.innerHTML = "Player Turn: " + this.turn;
        this.ticTacToe.appendChild(this.turnDiv);
    }

    this.ChangeTurn = function()
    {
        if (this.turn === "X") 
        {
            this.turn = "O";
        }
        else 
        {
            this.turn = "X";
        }
        
        this.turnDiv.innerHTML = "Player Turn: " + this.turn;
    }

    this.CheckWinCondition = function()
    {

        if (this.board[0] != "E" && this.board[0] === this.board[1] && this.board[1] === this.board[2])
        {
            this.result = this.turn;
            return true;
        }
        if (this.board[3] != "E" && this.board[3] === this.board[4] && this.board[4] === this.board[5])
        {
            this.result = this.turn;
            return true;
        }
        if (this.board[6] != "E" && this.board[6] === this.board[7] && this.board[7] === this.board[8])
        {
            this.result = this.turn;
            return true;
        }

        if (this.board[0] != "E" && this.board[0] === this.board[3] && this.board[3] === this.board[6])
        {
            this.result = this.turn;
            return true;
        }
        if (this.board[1] != "E" && this.board[1] === this.board[4] && this.board[4] === this.board[7])
        {
            this.result = this.turn;
            return true;
        }
        if (this.board[2] != "E" && this.board[2] === this.board[5] && this.board[5] === this.board[8])
        {
            this.result = this.turn;
            return true;
        }


        if (this.board[0] != "E" && this.board[0] === this.board[4] && this.board[4] === this.board[8])
        {
            this.result = this.turn;
            return true;
        }
        if (this.board[2] != "E" && this.board[2] === this.board[4] && this.board[4] === this.board[6])
        {
            this.result = this.turn;
            return true;
        }

        return false;
    }

    this.CheckDraw = function()
    {

        for (var i = 0; i < this.board.length; i++)
        {
            if (this.board[i] === "E")
            {
                return false;
            }
        }
        this.result = "Draw";
        return true;
    }

    this.PlayerMoveOnSquare = function (square, id) 
    {
        if (this.gameOver == false) 
        {
            if (this.board[id] === "E") 
            {
                square.classList.remove("Empty");
                if (this.turn === "X") 
                {
                    this.board[id] = "X";
                    square.classList.add("Cross");
                }
                else 
                {
                    this.board[id] = "O";
                    square.classList.add("Circle");
                }

                this.gameOver = this.CheckWinCondition();
                if (this.gameOver == false) 
                {
                    this.gameOver = this.CheckDraw();
                }

                if (this.gameOver == false) 
                {
                    this.ChangeTurn();
                }
                else 
                {
                    if (this.result === "Draw")
                    {
                        this.turnDiv.innerHTML = "Game over: " + this.result;
                    }
                    else
                    {
                        this.turnDiv.innerHTML = "Game over " + this.result + " won";
                    }
                    
                }
            }
        }
    }

}


//Varukorg
var varukorg = document.getElementById("Varukorg");
var varukorgLista = document.getElementById("Varor");

var varukorgKnapp = document.getElementById("AddVara");
varukorgKnapp.addEventListener("click", function () { varuKorgAdd(varukorgLista.value); });

var varukorgVisaKorg = document.getElementById("ListaVaror");
varukorgVisaKorg.addEventListener("click", function () { varuKorgShow(); });


var minaVaror = new Array();

function varuKorgAdd(value)
{
    if (value.length > 0)
    {
        minaVaror.push(value);
        localStorage.setItem("VaruKorg", JSON.stringify(minaVaror));
    }
}

function varuKorgShow()
{
    var varor = JSON.parse(localStorage.getItem("VaruKorg"));
console.log();
    for (var val of varor)
    {
        var nyVara = document.createElement("p");
        var varuText = document.createTextNode(val);
        nyVara.appendChild(varuText);
        varukorg.appendChild(nyVara);
    }

}

//localStorage.setItem("ListToDo", JSON.stringify(this.myToDo));
//var toDos = JSON.parse(localStorage.getItem("ListToDo"));
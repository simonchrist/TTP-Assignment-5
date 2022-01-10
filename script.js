//Simon Christian
/*
- `getElementById()`
- `addEventListener()`
- `getElementsByTagName()`
- `createElement()`
- `appendChild()`
- `event.target`
- `node.children`
- `Array.from()`
- `mousedown`
- `mouseover`
- `mouseup`
UserStories:
As a user, I can:
●	add rows to the grid
●	add columns to the grid
●	remove rows from the grid
●	remove columns from the grid
●	select a color from a dropdown menu of colors
●	click on a single cell, changing its color to the currently selected color
●	fill all uncolored cells with the currently selected color
●	fill all cells with the currently selected color
●	clear all cells/restore all cells to their original/initial color
●	click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
*/

//intialize x grid
let row= 1;
let col = 1;

//instantiation 
let selColor = "";
let mouse = false;
let currColor = "";

//helper functions
//select color
function selectColor(color) {
    selColor = color;
}

//set chosen color
function setColor(){
    this.style.backgroundColor = selColor;
}

//add rows to the grid
function addRow() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for(let i = 0; i < col; i++) {
        let grid = document.createElement("td");
        grid.classList.add("cell");
        changeColor(grid);
        row.appendChild(grid);
    }
}

//add columns to the grid
function addColumn() {
    col++;
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        let grid = document.createElement("td");
        grid.classList.add("cell");
        changeColor(grid);
        tr[i].appendChild(grid);
    }
}

//remove rows from the grid
function removeRow() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}

//remove columns from the grid
function removeColumn() {
    col--;
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }
}

//event listeners
function changeColor(grid){
    //click on a single cell, changing its color to the currently selected color
    grid.addEventListener("click", setColor);
    //click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
    grid.addEventListener("mouseup" , function() {
        if (mouse == true)
        {
            mouse = false;
        }
    })
    grid.addEventListener("mousedown", function() {
        mouse = true;
        currColor = selColor;
    })
    grid.addEventListener("mousemove" , function() {
        if (mouse == true)
        {
            grid.style.backgroundColor = currColor;
        }
    })
}

//fill all uncolored cells with the currently selected color
function colorAllUncoloredCells() {
    let fullGrid = document.getElementsByTagName("td");
    for (let i = 0; i < fullGrid.length; i++) {
        if (fullGrid[i].style.backgroundColor == "")
            fullGrid[i].style.backgroundColor = selColor;
    }
}

//fill all cells with the currently selected color
function colorAllCells() {
    let fullGrid = document.getElementsByTagName("td");
    for (let i = 0; i < fullGrid.length; i++) {
        fullGrid[i].style.backgroundColor = selColor;
    }
}

//clear all cells/restore all cells to their original/initial color
function resetColorOfCells() {
    let fullGrid = document.getElementsByTagName("td");
    for (let i = 0; i < fullGrid.length; i++) {
        fullGrid[i].style.backgroundColor = "";
    }
}
const mainGrid = document.querySelector("#main-grid");
let gridSize = 16;
let drawingColor = "black"
let colorChoice;

createGrid(16);
drawColor();

//Creates Grid by taking size and adding rows and columns
function createGrid(gridSize) {
  mainGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  mainGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  let numDivs = gridSize * gridSize;

  for(let i = 0; i < numDivs; i++) {
    const gridBox = document.createElement("div");
    mainGrid.insertAdjacentElement("beforeend", gridBox);
    gridBox.classList.add("grid-box");
  }
}

//Deletes Drawing inside Grid and resets the size to gridSize
function deleteDrawing() {
    mainGrid.innerHTML = "";
    createGrid(gridSize);
}

//Resizes Grid by user input and checks if value is over 100
function resizeGrid() {
  gridSize = prompt();
  if (gridSize <= 100) {
    mainGrid.innerHTML = "";
    createGrid(gridSize);
  }
  else {
    alert("ERROR - 100 is the maximum")
    mainGrid.innerHTML = "";
    createGrid(16);
  }
}

//Draws with selected color - standard is black
function drawColor() {
  if (colorChoice == "rainbow") {
    mainGrid.addEventListener("mouseover", (event) => {
      if (event.target.classList.contains("grid-box")) {
        let drawingColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        event.target.style.backgroundColor = drawingColor;
      }
    });
  }
  else {
    mainGrid.addEventListener("mouseover", (event) => {
      if (event.target.classList.contains("grid-box")) {
        drawingColor = "black";
        event.target.style.backgroundColor = drawingColor;
      }
    });
  }
} 
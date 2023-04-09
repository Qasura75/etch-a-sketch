const mainGrid = document.querySelector("#main-grid");

createGrid(16);

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

//Resizes Grid by user input and checks if value is over 100
function resizeGrid() {
  const gridSize = prompt();
  if (gridSize <= 100) {
    createGrid(gridSize);
  }
  else {
    alert("ERROR - 100 is the maximum")
    createGrid(16);
  }
}

mainGrid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-box")) {
      event.target.classList.add("grid-box-black");
    }
  });


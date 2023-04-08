const mainGrid = document.querySelector("#main-grid");


createGrid(16);

function resizeGrid() {
  while (mainGrid.firstChild) {
    mainGrid.removeChild(mainGrid.firstChild);
  }

  const gridSize = prompt();
  if (gridSize <= 100) {
    createGrid(gridSize);
  }
  else {
    alert("ERROR - 100 is the maximum")
    createGrid(16);
  }
}




function createGrid(gridSize) {
for (i=0; i<gridSize; i++) {
    const gridColumn = document.createElement("div");

    for (j=0; j<gridSize; j++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridColumn.appendChild(gridBox);
        gridColumn.classList.add("grid-column");
    }

    mainGrid.appendChild(gridColumn)

}
}




mainGrid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-box")) {
      event.target.classList.add("grid-box-black");
    }
  });


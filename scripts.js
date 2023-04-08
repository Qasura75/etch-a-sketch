const mainGrid = document.querySelector("#main-grid");


createGrid(16,16);

function createGrid(maxHeight, maxWidth) {
for (i=0; i<maxHeight; i++) {
    const gridColumn = document.createElement("div");

    for (j=0; j<maxWidth; j++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridColumn.appendChild(gridBox);
    }

    mainGrid.appendChild(gridColumn)

}
}




mainGrid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-box")) {
      event.target.classList.add("grid-box-black");
    }
  });


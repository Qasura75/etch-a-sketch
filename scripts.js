const mainGrid = document.querySelector("#main-grid");




//Creates Grid
for (i=0; i<16; i++) {
    const gridColumn = document.createElement("div");

    for (j=0; j<16; j++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridColumn.appendChild(gridBox);
    }

    mainGrid.appendChild(gridColumn)

}


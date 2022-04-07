const container = document.getElementById("container");
let isDrawing = false;

function makeRows(rowNum, columnNum) {
  container.style.setProperty("--grid-rows", rowNum);
  container.style.setProperty("--grid-cols", columnNum);
  for (let row = 0; row < rowNum; row++) {
    for (let column = 0; column < columnNum; column++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-item");
      container.appendChild(cell);
    //   cell.addEventListener("mouseenter", () => {
    //     cell.style.backgroundColor = "black";
    //     cell.addEventListener("mouseleave", () =>{
    //         cell.style.backgroundColor = "white"
    //     });
    //   });
        cell.addEventListener("mousedown" , () =>{
            isDrawing = true;
        });
        cell.addEventListener("mousemove" , () =>{
            if (isDrawing === true) {
                cell.style.backgroundColor = "black";
            }
        });
        cell.addEventListener("mouseup" , () =>{
            if (isDrawing === true) {
                isDrawing = false;
            }
        });
    }
  }
}
makeRows(16, 16);

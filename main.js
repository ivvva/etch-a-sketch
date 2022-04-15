const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-btn");

let isDrawing = false;
let colorPicker;
let selectedColor = "#000000";
let rangeSlider = document.getElementById("sliderRange");
let output = document.getElementById("range-output");

rangeSlider.defaultValue = "16";
output.innerHTML = `${rangeSlider.defaultValue} x ${rangeSlider.defaultValue}`;

function makeRows(number) {
  removeKids();
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

  for (let row = 0; row < number; row++) {
    for (let column = 0; column < number; column++) {
      prepareCells();
    }
  }
}

function prepareCells() {
  const cell = document.createElement("div");
  cell.classList.add("grid-item");
  container.appendChild(cell);
  cell.addEventListener("mousedown", () => {
    isDrawing = true;
  });
  cell.addEventListener("mousemove", () => {
    if (isDrawing === true) {
      cell.style.backgroundColor = selectedColor;
    }
  });
  cell.addEventListener("mouseup", () => {
    if (isDrawing === true) {
      isDrawing = false;
    }
  });
}

function clearGrid() {
  const kids = container.childNodes;
  for (let k = 0; k < kids.length; k++) {
    kids[k].style.backgroundColor = "white";
  }
}

function removeKids() {
  container.innerHTML = "";
}
clearBtn.addEventListener("click", clearGrid);

window.addEventListener("load", startup, false);

function startup() {
  colorPicker = document.querySelector("#pickcolor");
  colorPicker.value = selectedColor;
  //   colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateColor, false);
  colorPicker.select();
}

// function updateFirst(event) {
//   let pickedColor = document.querySelector("cell");

//   if (pickedColor) {
//     pickedColor.style.color = event.target.value;
//   }
// }

function updateColor(event) {
  selectedColor = event.target.value;
}

function changeSize(input){
  output.innerHTML = `${rangeSlider.value} x ${rangeSlider.value}` ;
  makeRows(input);
}

makeRows(16, 16);

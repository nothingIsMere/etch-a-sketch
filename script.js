
let drawing = false;
let erasing = false; 
let canvas = document.getElementById("canvas-container");
let clearBtn = document.getElementById("clear");
let drawBtn = document.getElementById("draw");
let eraseBtn = document.getElementById("erase");
let sizeBtn = document.getElementById("resize");
let instructions = document.getElementById("instructions");
let canvasSize = 64;

function reset(){
  canvas.removeEventListener("mousedown", startDraw);
  canvas.removeEventListener("mouseup", stopDraw);
  canvas.removeEventListener("mousedown", startErase);
  canvas.removeEventListener("mouseup", stopErase);
  while (instructions.firstChild){
    instructions.removeChild(instructions.firstChild);
  }
  drawBtn.style.backgroundColor = "#666";
  eraseBtn.style.backgroundColor = "#666"; 
}

function resizeGrid(){
  reset();
  drawing = false;
  erasing = false;
  removeGrid(); 
  canvasSize = prompt("How many pixels per side?");
  buildGrid(canvasSize);
}

function removeGrid(){
  while (canvas.firstChild){
    canvas.removeChild(canvas.firstChild);
  } 
}

function buildGrid(size){
  for(let i = 0; i < size; i++){
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for(let j = 0; j < size; j++){
      let newBox = document.createElement("div")
      newBox.classList.add("box");
      newBox.addEventListener("mouseover", function(){
        if(drawing === true){
          newBox.classList.add("filled"); 
        }
        else if(erasing === true){
          newBox.classList.remove("filled");
        }
      })
      newRow.appendChild(newBox);
    }
    canvas.appendChild(newRow);
  }
}

function clearGrid(){
  let boxes = Array.from(document.querySelectorAll(".box"));
  boxes.forEach(function(e){
    e.classList.remove("filled");
  })
  reset();
}

function startDraw() {
  erasing = false;
  drawing = true;
}

function stopDraw() {
  drawing = false;
}

function startErase() {
  drawing = false;
  erasing = true;
}

function stopErase() {
  erasing = false;
}

function chooseDraw() {
  drawBtn.style.backgroundColor = "black";
  eraseBtn.style.backgroundColor = "#666";
  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mouseup", stopDraw);
  canvas.removeEventListener("mousedown", startErase);
  canvas.removeEventListener("mouseup", stopErase)
  while (instructions.firstChild){
    instructions.removeChild(instructions.firstChild);
  } 
  instructions.textContent = "To start drawing, click anywhere on canvas.";
}

function chooseErase() {
  eraseBtn.style.backgroundColor = "black";
  drawBtn.style.backgroundColor = "#666";
  canvas.addEventListener("mousedown", startErase);
  canvas.addEventListener("mouseup", stopErase);
  canvas.removeEventListener("mousedown", startDraw);
  canvas.removeEventListener("mouseup", stopDraw);
  while (instructions.firstChild){
    instructions.removeChild(instructions.firstChild);
  } 
  instructions.textContent = "To start erasing, click anywhere on canvas.";
}

for(let i = 0; i < canvasSize; i++){
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  for(let j = 0; j < canvasSize; j++){
    let newBox = document.createElement("div")
    newBox.classList.add("box");
    newBox.addEventListener("mouseover", function(){
      if(drawing === true){
        newBox.classList.add("filled"); 
      }
      else if(erasing === true){
        newBox.classList.remove("filled");
      }
    })
    newRow.appendChild(newBox);
  }
  canvas.appendChild(newRow);
}

drawBtn.addEventListener("click", chooseDraw);
eraseBtn.addEventListener("click", chooseErase);
clearBtn.addEventListener("click", clearGrid);
sizeBtn.addEventListener("click", resizeGrid); 


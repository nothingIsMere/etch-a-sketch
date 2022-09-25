
let drawing = false;
let erasing = false; 
let canvas = document.getElementById("canvas-container");
let clearBtn = document.getElementById("clear");
let drawBtn = document.getElementById("draw");
let eraseBtn = document.getElementById("erase");
let sizeBtn = document.getElementById("resize");
let canvasSize = 64;


function resizeGrid(){
  console.log(`in resizeGrid`);
  drawing = false;
  erasing = false;
  removeGrid(); 
  canvasSize = prompt("How many pixels per side?");
  buildGrid(canvasSize);
}

function removeGrid(){
  console.log(`in removeGrid`);
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
  canvas.removeEventListener("mousedown", startDraw);
  canvas.removeEventListener("mouseup", stopDraw);
  canvas.removeEventListener("mousedown", startErase);
  canvas.removeEventListener("mouseup", stopErase);
}

function startDraw() {
  console.log(`in startDraw`);
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
  console.log(`in chooseDraw`);
  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mouseup", stopDraw);
}

function chooseErase() {
  canvas.addEventListener("mousedown", startErase);
  canvas.addEventListener("mouseup", stopErase);
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


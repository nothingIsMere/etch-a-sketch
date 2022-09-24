let canvasSize = 64;
let drawing; 
let canvas = document.getElementById("canvas-container");

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
      
    })
    newRow.appendChild(newBox);
  }
  canvas.appendChild(newRow);
}

canvas.addEventListener("mousedown", function(){
  drawing = true;
})

canvas.addEventListener("mouseup", function(){
  drawing = false;
})


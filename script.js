
let drawing = false;
let erasing = false; 
let canvas = document.getElementById("canvas-container");
let clearBtn = document.getElementById("clear");
let drawBtn = document.getElementById("draw");
let eraseBtn = document.getElementById("erase");
let sizeBtn = document.getElementById("resize");
let canvasSize = 64;


for(let i = 0; i < canvasSize; i++){
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  for(let j = 0; j < canvasSize; j++){
    let newBox = document.createElement("div")
    newBox.classList.add("box");
    // newBox.classList.add("filled");
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

drawBtn.addEventListener("click", function(){
  canvas.addEventListener("mousedown", function(){
    erasing = false;
    drawing = true;

  })
  canvas.addEventListener("mouseup", function(){
    drawing = false;
  })
})

eraseBtn.addEventListener("click", function(){
  canvas.addEventListener("mousedown", function(){
    drawing = false;
    erasing = true;
  })
  canvas.addEventListener("mouseup", function(){
    erasing = false;

  })
})

clearBtn.addEventListener("click", function(){
  let boxes = Array.from(document.querySelectorAll(".box"));
  boxes.forEach(function(e){
    e.classList.remove("filled");
  })
})

sizeBtn.addEventListener("click", function(){
  canvasSize = prompt("How many pixels per side?");
  while (canvas.firstChild){
    canvas.removeChild(canvas.firstChild);
  } 
  for(let i = 0; i < canvasSize; i++){
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for(let j = 0; j < canvasSize; j++){
      let newBox = document.createElement("div")
      newBox.classList.add("box");
      // newBox.classList.add("filled");
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
})


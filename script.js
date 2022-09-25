let canvasSize = 64;
let drawing = false;
let erasing = false; 
let canvas = document.getElementById("canvas-container");
let clearBtn = document.getElementById("clear");
let drawBtn = document.getElementById("draw");
let eraseBtn = document.getElementById("erase");


for(let i = 0; i < canvasSize; i++){
  let newRow = document.createElement("div");
  newRow.classList.add("row");
  for(let j = 0; j < canvasSize; j++){
    let newBox = document.createElement("div")
    newBox.classList.add("box");
    // newBox.classList.add("filled");
    newBox.addEventListener("mouseover", function(){
      console.log(`drawing = ${drawing}, erasing = ${erasing}`); 
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
  console.log(`drawing = ${drawing}, erasing = ${erasing}`); 
  canvas.addEventListener("mousedown", function(){
    erasing = false;
    drawing = true;
    console.log(`drawing = ${drawing}, erasing = ${erasing}`); 
  })
  canvas.addEventListener("mouseup", function(){
    drawing = false;
    console.log(`drawing = ${drawing}, erasing = ${erasing}`); 
  })
})

eraseBtn.addEventListener("click", function(){
  console.log(`drawing = ${drawing}, erasing = ${erasing}`); 
  canvas.addEventListener("mousedown", function(){
    drawing = false;
    erasing = true;
    console.log(`drawing = ${drawing}, erasing = ${erasing}`); 
  })
  canvas.addEventListener("mouseup", function(){
    erasing = false;
    console.log(`drawing = ${drawing}, erasing = ${erasing}`); 
  })
})

clearBtn.addEventListener("click", function(){
  let boxes = Array.from(document.querySelectorAll(".box"));
  boxes.forEach(function(e){
    e.classList.remove("filled");
  })
})
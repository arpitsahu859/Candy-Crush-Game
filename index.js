document.addEventListener('DOMContentLoaded',() =>{
 const grid = document.querySelector('.grid');
 const width = 8 ;
 const squares = []

 const candycolor = [
    'red','blue','yellow',
    'orange','purple','green',
 ]




 function createboard(){
  for(let i = 0; i<width*width  ; i++){
    const square = document.createElement('div');
    square.setAttribute('draggable', true);
    square.setAttribute('id',i);
    let randomcolor = Math.floor(Math.random()* candycolor.length);
    square.style.backgroundColor = candycolor[randomcolor];
    grid.appendChild(square);
    squares.push(square);
  }

 }
 createboard()

 squares.forEach(square => square.addEventListener('dragstart',dragstart))
 squares.forEach(square => square.addEventListener('dragend',dragEnd))
 squares.forEach(square => square.addEventListener('dragover',dragOver))
 squares.forEach(square => square.addEventListener('dragenter',dragEnter))
 squares.forEach(square => square.addEventListener('dragleave',dragLeave))
 squares.forEach(square => square.addEventListener('drop',dragDrop))



})
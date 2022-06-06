let container = document.getElementById('container');

let btn = document.getElementById('btn');

btn.addEventListener('click', getSquareChoice)

makeGrid(16);



function getSquareChoice(){
  let choice = prompt('Please enter number of squares you wish to play with per side (must be from 1 - 100)');
  container.innerHTML = '';
  if (choice < 101 && choice > 0){
    makeGrid(choice);
  } else {
    getSquareChoice();
  };
};



//function for making the grid
function makeGrid (x){
  let squareSize = 100 / x;
  let y = x * x;
  for (i = 0; i < y; i++){
    let g = document.createElement('div');
    g.setAttribute("class", "grid");
    g.style.minWidth = `${squareSize}%`;
    g.style.minHeight = `${squareSize}%`;
    g.addEventListener('mouseenter', () => {
    g.style.backgroundColor = selectRandomColor();
    });
    container.appendChild(g);
  };
};

function selectRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = 100+ Math.floor(Math.random() * 256);
  let z = 50+ Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
 	return bgColor;
}


 
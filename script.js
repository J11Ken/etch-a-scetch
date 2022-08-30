//Get number of squares to play with
const button = document.querySelector('button');

//get square choice 
  button.addEventListener('click', () =>{
  let squareChoice = parseInt(prompt('Please enter a number from 1 - 100:'));
    if (squareChoice > 100 || squareChoice < 1){
      alert('Sorry, please pick a number from 1 - 100!')
    } else {
      createSquares(squareChoice);
    }
});


//square root function
function getSize (n){
  let size = 600 / (Math.sqrt(n));
  return size += 'px';
}

//query the canvas
const canvas = document.querySelector('#canvas')


//Creates each square within the canvas
function createSquares(x){
  let y = Math.pow(x, 2)
    for (i=0; i < y; i++){
      let square = document.createElement('div');
      square.classList.add('square');
      canvas.appendChild(square);
      square.style.width = getSize(y);
      square.style.height = getSize(y);
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
      });
    };
};

//clears all squares and allows to start a new game
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  canvas.textContent = '';
  });


 

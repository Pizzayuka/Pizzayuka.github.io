$(document).ready(function() {
alert("[move with arrowkeys]"); 

//var audio = document.getElementById('audioFile');
//audio.controls = false;

var character = document.querySelector(".character");
var map = document.querySelector(".map");
var messege = document.querySelector(".messege");
var question = document.querySelector(".question");

var x = 90;
var y = 45;
var held_directions = []; 
var speed = 0.7; 

const placeCharacter = () => {

   var pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
   );

   const held_direction = held_directions[0];
   if (held_direction) {
      if (held_direction === directions.right) {x += speed;}
      if (held_direction === directions.left) {x -= speed;}
      if (held_direction === directions.down) {y += speed;}
      if (held_direction === directions.up) {y -= speed;}
      character.setAttribute("facing", held_direction);
   }

   character.setAttribute("walking", held_direction ? "true" : "false");

   var leftLimit = 45;
   var rightLimit = 145;
   var topLimit = 10 ;
   var bottomLimit = (16 * 2.5);
   if (x < leftLimit) { x = leftLimit; }
   if (x > rightLimit) { x = rightLimit; }
   if (y < topLimit) { y = topLimit; }
   if (y > bottomLimit) { y = bottomLimit; }

   character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;

   if ( x > 120 && y < 12){messege.style.display="block"} else{messege.style.display="none"}
   if ( (x > 85 && x < 110) && y < 12) {question.style.display="block"} else{question.style.display="none"}

}


const step = () => {
   placeCharacter();
   window.requestAnimationFrame(() => {
      step();
   })
}
step(); 



/* Direction key state */
const directions = {
   up: "up",
   down: "down",
   left: "left",
   right: "right",
}
const keys = {
   38: directions.up,
   37: directions.left,
   39: directions.right,
   40: directions.down,
}
document.addEventListener("keydown", (e) => {
   var dir = keys[e.which];
   if (dir && held_directions.indexOf(dir) === -1) {
      held_directions.unshift(dir)
   }
})

document.addEventListener("keyup", (e) => {
   var dir = keys[e.which];
   var index = held_directions.indexOf(dir);
   if (index > -1) {
      held_directions.splice(index, 1)
   }


})

let modifier = 50;

window.addEventListener('keydown', (event) => {
  const { style } = block;
  switch (event.key) {
    case 'ArrowUp': style.top = `${parseInt(style.top) - modifier }px`; break;
    case 'ArrowDown': style.top = `${parseInt(style.top) - modifier }px`; break;
    case 'ArrowLeft': style.left = `${parseInt(style.top) - modifier }px`; break;
    case 'ArrowRight': style.left = `${parseInt(style.top) - modifier }px`; break;

  }
  

});
})


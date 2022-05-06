let divGroup = document.querySelectorAll("div");
let y = 0;
let scrollHeight = document.body.scrollHeight;

console.log(scrollHeight);

document.body.onscroll = function() {
  y = window.pageYOffset;
  
  let decimal = y / scrollHeight;
  let pct = decimal * 100;
  console.log(decimal);
  
  // divGroup[0].style.marginLeft = y + "px"
  // divGroup[0].style.width = y + "px"
  // divGroup[1].style.height = y + "px"
  //   divGroup[2].style.width = y + "px"
  

  
  for(let i = 0; i < divGroup.length; i++){
    let div = divGroup[i];
    div.style.height = i * y / Math.random() * 0.01  + "px"
    div.style.width = i * y / Math.random() * 0.01  + "px";

  }


}
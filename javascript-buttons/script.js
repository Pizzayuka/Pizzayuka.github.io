console.log("hello class");

//var anythingIWant = document.querySelector("h1");
//anythingIWant.style.color = "yellow";
var backgroundColor = document.body;

var isDark = false;
var isSerif = true;
var isOneColumn = true;


var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);


function changeToDarkMode(){
  if(isDark === true) {
    
    darkModeButton.textContent = "Dark Mode";
    backgroundColor.style.background = "white";
    backgroundColor.style.color = "black";
    isDark = false;
    console.log("dark mode is off")
    
  } else if(isDark === false){
     darkModeButton.textContent = "Light Mode";
     backgroundColor.style.background = "black";
     backgroundColor.style.color = "white";
     isDark = true;
    console.log("dark mode is on")
  }
}



const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = "#" + randomColor;
   color.innerHTML = "#" + randomColor;
}

buttonRandomColor.addEventListener("click", setBg);
setBg();



function changeTypeface(){
    if(isSerif === true) {
    document.body.style.fontFamily = "sans-serif";
    buttonTypeface.textContent = "Serif";
    isSerif = false;
    } else if(isSerif === false) {
        document.body.style.fontFamily = "serif";
        buttonTypeface.textContent = "Sans Serif";
        isSerif = true;
    }
}


function columns(){
    if(isOneColumn === true) {
        document.querySelector("p").style.columnCount = "2";
        buttonColumns.textContent = "Single Columns";
        isOneColumn = false;
        } else if(isOneColumn === false) {
            document.querySelector("p").style.columnCount = "1";
            buttonColumns.textContent = "2 Columns";
            isOneColumn = true;
        }
}


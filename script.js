let button1 = document.getElementById("slider-button1");
let button2 = document.getElementById("slider-button2");
let button3 = document.getElementById("slider-button3");

button1.addEventListener("click", function(){
    button1.style.color ="#000000";
    button2.style.color ="#aaaaaa";
    button3.style.color ="#aaaaaa";
    
})
button2.addEventListener("click", function(){
    button1.style.color ="#aaaaaa";
    button2.style.color ="#000000";
    button3.style.color ="#aaaaaa";
    
})
button3.addEventListener("click", function(){
    button1.style.color ="#aaaaaa";
    button2.style.color ="#aaaaaa";
    button3.style.color ="#000000";
    
})

var header = document.getElementById("showcase-buttons");
var btns = header.getElementsByClassName("showcase-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
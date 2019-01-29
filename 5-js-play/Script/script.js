function sayHello() {
  alert('Helloo');
}

function newHead() {
  var myHeadline = document.getElementById('head');
  myHeadline.textContent = "Better Headline 😀";
  myHeadline.style.backgroundColor = "red";
}

function newImage() {
  document.getElementById('pic').src = "images/cat.jpg";
}

function newParagraph() {
  for (i = 0; i < 100; i++) {
  var par = document.createElement("p");
  var text = document.createTextNode("WOW");
  par.appendChild(text);
  var empty = document.getElementById("empty");
  empty.appendChild(par);

  }
}

function recolor(){
document.body.style.backgroundColor = "rgb("
+Math.floor(Math.random() * 255)+","
+Math.floor(Math.random() * 255)+","
+Math.floor(Math.random() * 255)+")";
}


window.addEventListener("resize", function(){
  var widthData = window.outerWidth;
    document.getElementById('head').textContent ="Stop. It is already " +widthData+ " pixels!";
  setTimeout(function() {
    document.getElementById('head').textContent = "playground";
  }, 2500 )
});

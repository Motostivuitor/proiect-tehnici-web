setTimeout(function(){ alert("Hello! Welcome to my website!"); }, 3000);
var elementID = document.getElementById("mydiv");
elementID.classList.add("mystyle");

var element = document.getElementById("delete");
element.parentNode.removeChild(element);

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para,child);
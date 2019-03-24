
var node = document.createElement("LI");
var textnode = document.createTextNode("Recaudo: $2,917,506,956");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

var node = document.createElement("LI");
var textnode = document.createTextNode("País donde se filmó: Nueva Zelanda");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

var node = document.createElement("LI");
var textnode = document.createTextNode("Basado en: 	The Lord of the Rings de J. R. R. Tolkien");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

var node = document.createElement("LI");
var textnode = document.createTextNode("Año de lanzamiento: Parte 1 (2001), parte 2 (2002), parte 3 (2003)");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

var node = document.createElement("LI");
var textnode = document.createTextNode("Billy Boyd como Peregrin Took (Pippin)");
node.appendChild(textnode);
document.getElementById("myList2").appendChild(node);



function myFunction1() {
    var x = document.getElementsByClassName("mySlides");
    const y = document.getElementById("Argument")
    const i = document.getElementById("Videos");
    var j = document.getElementsByClassName("w3-button");
    var k = document.getElementById("Facts");
    x[0].style.display = "block";
    x[1].style.display = "none";
    x[2].style.display = "none";
    x[3].style.display = "none";
    x[4].style.display = "none";
    y.style.display = "none";
    i.style.display = "none";
    j[0].style.display = "block";
    j[1].style.display = "block";
    k.style.display = "none";


}


function myFunction2() {
    var x = document.getElementsByClassName("mySlides");
    const y = document.getElementById("Argument");
    const i = document.getElementById("Videos");
    var j = document.getElementsByClassName("w3-button");
    var k = document.getElementById("Facts");
    x[0].style.display = "none";
    x[1].style.display = "block";
    x[2].style.display = "none";
    x[3].style.display = "none";
    x[4].style.display = "none";
    y.style.display = "none";
    i.style.display = "none";
    j[0].style.display = "block";
    j[1].style.display = "block";
    k.style.display = "none";

}

function myFunction3() {
    var x = document.getElementsByClassName("mySlides");
    const y = document.getElementById("Argument");
    const i = document.getElementById("Videos");
    var j = document.getElementsByClassName("w3-button");
    var k = document.getElementById("Facts");
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "block";
    x[3].style.display = "none";
    x[4].style.display = "none";
    y.style.display = "none";
    i.style.display = "none";
    j[0].style.display = "block";
    j[1].style.display = "block";
    k.style.display = "none";

}


function myFunction4() {
    var x = document.getElementsByClassName("mySlides");
    const y = document.getElementById("Argument");
    const i = document.getElementById("Videos");
    var j = document.getElementsByClassName("w3-button");
    var k = document.getElementById("Facts");
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";
    x[3].style.display = "block";
    x[4].style.display = "none";
    y.style.display = "none";
    i.style.display = "none";
    j[0].style.display = "block";
    j[1].style.display = "block";
    k.style.display = "none";

}

function myFunction5() {
    var x = document.getElementsByClassName("mySlides");
    const y = document.getElementById("Argument");
    const i = document.getElementById("Videos");
    var j = document.getElementsByClassName("w3-button");
    var k = document.getElementById("Facts");
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";
    x[3].style.display = "none";
    x[4].style.display = "block";
    y.style.display = "none";
    i.style.display = "none";
    j[0].style.display = "block";
    j[1].style.display = "block";
    k.style.display = "none";

}

function myFunction6() {
    var x = document.getElementsByClassName("mySlides");
    const y = document.getElementById("Argument");
    const i = document.getElementById("Videos");
    var j = document.getElementsByClassName("w3-button");
    var k = document.getElementById("Facts");
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";
    x[3].style.display = "none";
    x[4].style.display = "none";
    y.style.display = "block";
    i.style.display = "none";
    j[0].style.display = "none";
    j[1].style.display = "none";
    k.style.display = "none";

}


function myFunction7() {
    var x = document.getElementsByClassName("mySlides");
    const y = document.getElementById("Argument");
    var i = document.getElementById("Videos");
    var j = document.getElementsByClassName("w3-button");
    var k = document.getElementById("Facts");
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";
    x[3].style.display = "none";
    x[4].style.display = "none";
    y.style.display = "none";
    i.style.display = "block";
    j[0].style.display = "none";
    j[1].style.display = "none";
    k.style.display = "none";

}


function myFunction8() {
    var x = document.getElementsByClassName("mySlides");
    const y = document.getElementById("Argument");
    var i = document.getElementById("Videos");
    var j = document.getElementsByClassName("w3-button");
    var k = document.getElementById("Facts");
    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";
    x[3].style.display = "none";
    x[4].style.display = "none";
    y.style.display = "none";
    i.style.display = "none";
    j[0].style.display = "none";
    j[1].style.display = "none";
    k.style.display = "block";

}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");

    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";

}

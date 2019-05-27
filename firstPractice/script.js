function setHeading() {
var heading = document.createElement('h1'); 
heading.innerHTML = document.getElementById('message').value;
document.getElementById('output').appendChild(heading);
}

function changeColor() {

    var red = Math.floor((Math.random() * 256)); // chooses numbers from 0 to 255
    var green = Math.floor((Math.random() * 256));
    var blue = Math.floor((Math.random() * 256));

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`; //  string formate

}
